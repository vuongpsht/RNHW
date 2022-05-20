import React from 'react';
import {useCountries} from 'Hooks/Services';
import {CountriesList} from 'Screens/Home/components/CountriesList';

export const Home = () => {
  const {data, fetching} = useCountries();
  return (
    <CountriesList
      countriesList={!fetching && data?.countries ? data.countries : undefined}
    />
  );
};
