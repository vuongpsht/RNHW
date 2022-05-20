/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {GraphqlProvider} from './src/Provider/GraphqlProvider';
import {RootStack} from './src/Navigation';

const App = () => {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <GraphqlProvider>
        <RootStack />
      </GraphqlProvider>
    </SafeAreaView>
  );
};

export default App;
