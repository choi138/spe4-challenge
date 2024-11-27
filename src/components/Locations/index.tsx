import {useQuery} from '@apollo/client';
import React from 'react';
import {Text} from 'react-native';
import {getLocations} from '../../GetLocations';
import {GetLocationsQuery} from '../../types';

export const Locations: React.FC = () => {
  const {error, data} = useQuery<GetLocationsQuery>(getLocations);
  console.log(data, 'data');

  if (error) {
    return <Text>Error</Text>;
  }
  if (data) {
    return <Text>{data.locations.map(location => location.name)}</Text>;
  }
};
