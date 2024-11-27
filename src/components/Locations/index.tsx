import {gql, useQuery} from '@apollo/client';
import React from 'react';
import {Text} from 'react-native';

const GET_LOCATIONS = gql`
  query Query {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const Locations: React.FC = () => {
  const {error, data} = useQuery(GET_LOCATIONS);
  console.log(data, 'data');

  if (error) {
    return <Text>Error</Text>;
  }
  if (data) {
    return <Text>{JSON.stringify(data)}</Text>;
  }
};
