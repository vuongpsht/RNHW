import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Country} from 'Type/Country';
import {HomeHeader} from 'Screens/Home/components/HomeHeader';
import {useNavigation} from '@react-navigation/native';

interface CountriesListProps {
  countriesList?: Country[];
}

interface CountryItem {
  item: Country;
}

const Item: React.FC<CountryItem> = React.memo(({item}) => {
  const {navigate}: any = useNavigation();
  const onPressItem = () => navigate('Country', {...item});
  return (
    <TouchableOpacity onPress={onPressItem} style={itemStyle.container}>
      <Text style={itemStyle.flag}>{item.emoji}</Text>
      <View>
        <Text style={itemStyle.name}>{item.name}</Text>
        <Text style={itemStyle.capital}>{item.capital}</Text>
      </View>
    </TouchableOpacity>
  );
});

export const CountriesList: React.FC<CountriesListProps> = ({
  countriesList,
}) => {
  if (!(countriesList && countriesList.length > 0)) {
    return null;
  }
  return (
    <FlatList
      removeClippedSubviews={true}
      initialNumToRender={50}
      maxToRenderPerBatch={50}
      ListHeaderComponent={HomeHeader}
      data={countriesList}
      keyExtractor={item => `country-${item.name}`}
      renderItem={element => <Item {...element} />}
    />
  );
};

const itemStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: 70,
    marginTop: 16,
    backgroundColor: 'white',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    alignItems: 'center',
  },
  flag: {fontSize: 60, marginRight: 12},
  name: {fontSize: 16, fontWeight: 'bold'},
  capital: {fontSize: 14, color: '#7F7F7F'},
});
