import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HomeHeader = () => {
  return <View style={s.container} />;
};

const s = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    backgroundColor: '#FFC0CB',
    borderBottomLeftRadius: 20,
  },
});
