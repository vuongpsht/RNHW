import React from 'react';
import {createClient, Provider} from 'urql';

const client = createClient({
  url: 'https://countries.trevorblades.com/graphql',
});

export const GraphqlProvider: React.FC = ({children}) => {
  return <Provider value={client}>{children}</Provider>;
};
