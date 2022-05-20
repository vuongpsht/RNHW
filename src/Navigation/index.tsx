import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from 'Screens/Home';
import {Country} from 'Screens/Country';
import {Continent} from 'Screens/Continent';

const AppStack = createNativeStackNavigator();
const config: any = {
  initialRouteName: 'Home',
  screens: {
    Country: 'country/:code',
    Continent: 'continent/:code',
  },
};

const linking = {
  prefixes: ['rnhw://', 'rnhw://country', 'rnhw://continent'],
  config,
};

export const RootStack = () => {
  return (
    <NavigationContainer linking={linking}>
      <AppStack.Navigator>
        <AppStack.Screen
          options={{headerShown: false}}
          name={'Home'}
          component={Home}
        />
        <AppStack.Screen name={'Country'} component={Country} />
        <AppStack.Screen name={'Continent'} component={Continent} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
