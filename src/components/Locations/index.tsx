import React from 'react';
import { Text } from 'react-native';

import { useQuery } from '@apollo/client';

import { getLocationsQueryDocument } from '../../queries/GetLocations';
import { GetLocationsQuery } from '../../gql/types';

export const Locations: React.FC = () => {
  const { error, data } = useQuery<GetLocationsQuery>(getLocationsQueryDocument);
  console.log(data, 'data');

  if (error) {
    return <Text>Error</Text>;
  }
  if (data) {
    return <Text>{data.locations.map((location) => location.name)}</Text>;
  }
};
