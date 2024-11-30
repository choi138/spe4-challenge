import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native';

import { useQuery } from '@apollo/client';
import { Stack } from '@mobily/stacks';

import { LocationInfoBox } from 'src/components';
import { GetLocationsQuery } from 'src/gql/types';
import { getLocationsQueryDocument } from 'src/queries';

export const HomeScreen: React.FC = () => {
  const { data, loading } = useQuery<GetLocationsQuery>(getLocationsQueryDocument);

  return (
    <SafeAreaView style={{ flex: 1, padding: 18 }}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        data && (
          <Stack space={4}>
            {data.locations.map((location) => (
              <LocationInfoBox
                key={location.id}
                imageUri={location.photo}
                name={location.name}
                description={location.description}
              />
            ))}
          </Stack>
        )
      )}
    </SafeAreaView>
  );
};
