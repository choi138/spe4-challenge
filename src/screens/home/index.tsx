import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useQuery } from '@apollo/client';
import { Stack, Tiles } from '@mobily/stacks';

import { LocationInfoBox, TransitionCircle } from 'src/components';
import { GetLocationsQuery } from 'src/gql/types';
import { getLocationsQueryDocument } from 'src/queries';
import { TRANSITION_CIRCLE_BACKGROUND_COLOR_LIST } from 'src/constant';
import { RootStackParamList } from 'src/Router';

export const HomeScreen: React.FC = () => {
  const navigate = useNavigation().navigate as unknown as (
    screen: keyof RootStackParamList,
  ) => void;

  const { data, loading } = useQuery<GetLocationsQuery>(getLocationsQueryDocument);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          data && (
            <Stack space={4}>
              {data.locations.map((location) => (
                <LocationInfoBox
                  onPress={() => navigate('PhoneInput')}
                  key={location.id}
                  imageUri={location.photo}
                  name={location.name}
                  description={location.description}
                />
              ))}
            </Stack>
          )
        )}
        <Tiles space={4} columns={4}>
          {TRANSITION_CIRCLE_BACKGROUND_COLOR_LIST.map((color) => (
            <TransitionCircle key={color} backgroundColor={color} />
          ))}
        </Tiles>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 18,
    rowGap: 40,
    justifyContent: 'space-between',
  },
});
