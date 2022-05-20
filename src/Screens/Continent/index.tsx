import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useContinent} from 'Hooks/Services';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Continent as ContinentParams} from 'Type/Country';
type DataFromParams = {
  country: ContinentParams;
};

type CountryLink = {
  name: string;
  onPress: () => void;
};
type EachLineProps = {
  name: string;
  value: string | CountryLink[];
};
const EachLine: React.FC<EachLineProps> = ({name, value}) => {
  return (
    <View style={s.lineWrapper}>
      <Text>{name}</Text>
      {typeof value === 'string' ? (
        <Text>{value}</Text>
      ) : (
        <View style={s.countryName}>
          {value.map(e => {
            return (
              <TouchableOpacity onPress={e.onPress}>
                <Text style={s.highlight}>{e.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export const Continent = () => {
  const params = useRoute<RouteProp<DataFromParams>>().params;
  const {data, fetching, error} = useContinent({code: params?.code});
  const {navigate}: any = useNavigation();
  const dataProcess = React.useMemo(() => {
    if (data?.continent?.countries) {
      return {
        name: data.continent.name,
        mappingData: [
          {name: 'code', value: data.continent.code},
          {
            name: 'countries',
            value: data.continent.countries.map(e => ({
              name: e.name,
              onPress: () => navigate('Country', {...e}),
            })),
          },
        ],
      };
    } else {
      return {
        name: '',
        mappingData: [],
      };
    }
  }, [data, navigate]);
  if (fetching) {
    return <ActivityIndicator />;
  }
  if (!data?.continent) {
    return <Text style={s.msg}>Wrong continent</Text>;
  }
  if (error) {
    return <Text style={s.msg}>Something went wrong</Text>;
  }
  return (
    <View style={s.container}>
      <ScrollView>
        <Text style={s.title}>{dataProcess.name}</Text>

        {dataProcess.mappingData.map(e => {
          return <EachLine key={e.name} {...e} />;
        })}
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {fontSize: 20, fontWeight: 'bold', alignSelf: 'center'},
  lineWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  countryName: {
    alignItems: 'flex-end',
  },
  highlight: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  msg: {
    alignSelf: 'center',
  },
});
