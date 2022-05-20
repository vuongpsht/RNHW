import {QUERY_CONTINENT, QUERY_COUNTRIES, QUERY_COUNTRY} from 'Constant/query';
import {useQuery} from 'urql';
import {useEffect} from 'react';
import {ContinentQuery, CountriesQuery, CountryQuery} from 'Type/Country';

export const useCountries = () => {
  const [{data, fetching}, exc] = useQuery<CountriesQuery>({
    query: QUERY_COUNTRIES,
  });
  useEffect(() => {
    exc();
  }, [exc]);

  return {data, fetching};
};

type ParamsGetDataWithCode = {
  code: string;
};

export const useContinent = ({code}: ParamsGetDataWithCode) => {
  const [{data, fetching, error}, exc] = useQuery<ContinentQuery>({
    query: QUERY_CONTINENT,
    variables: {countryCode: code},
  });
  useEffect(() => {
    exc();
  }, [exc]);
  return {data, fetching, error};
};

export const useCountry = ({code}: ParamsGetDataWithCode) => {
  const [{data, fetching, error}, exc] = useQuery<CountryQuery>({
    query: QUERY_COUNTRY,
    variables: {countryCode: code},
  });
  useEffect(() => {
    exc();
  }, [exc, code]);
  return {data, fetching, error};
};
