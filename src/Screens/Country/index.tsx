import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Country as CountryType} from 'Type/Country';
import type {RouteProp} from '@react-navigation/native';
import {useCountry} from 'Hooks/Services';

type DataFromParams = {
  country: CountryType;
};
type EachLineProps = {
  name: string;
  value: string;
  onPress?: () => void;
};
type DataProcess = {
  dataMapping: EachLineProps[];
  emoji: string;
  name: string;
};
const EachLine: React.FC<EachLineProps> = ({name, value, onPress}) => {
  return (
    <View style={s.lineContainer}>
      <Text>{name}</Text>
      <TouchableOpacity onPress={onPress} disabled={!onPress}>
        <Text style={onPress ? s.highlight : {}}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};
export const Country = () => {
  const params = useRoute<RouteProp<DataFromParams>>().params;

  const {navigate}: any = useNavigation();
  const {data, error, fetching} = useCountry({code: params?.code});
  const dataProcess: DataProcess = React.useMemo(() => {
    if (!!data && data.country) {
      const {phone, continent, emoji, name, code} = data.country;
      return {
        dataMapping: [
          {name: 'alpha2code', value: code},
          {name: 'callingCode', value: phone},
          {
            name: 'continent',
            value: continent.name,
            onPress: () => navigate('Continent', {...continent}),
          },
        ],
        emoji,
        name,
      };
    } else {
      return {
        name: '',
        emoji: '',
        dataMapping: [],
      };
    }
  }, [data, navigate]);

  if (fetching) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text style={s.msg}>Something went wrong</Text>;
  }

  if (!data?.country) {
    return <Text style={s.msg}>Country invalid</Text>;
  }

  return (
    <View style={s.container}>
      <Text style={s.flag}>{dataProcess.emoji}</Text>
      <Text style={s.countryName}>{dataProcess.name}</Text>
      {dataProcess.dataMapping.map(e => {
        return (
          <React.Fragment key={e.name}>
            <EachLine {...e} />
          </React.Fragment>
        );
      })}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flag: {fontSize: 120},
  lineContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  countryName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  highlight: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  msg: {
    alignSelf: 'center',
  },
});
