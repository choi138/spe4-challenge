import {Stack, StacksProvider} from '@mobily/stacks';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {AnimatedBox, Box, Divider, Locations, Timer} from './src';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-locations-sub.herokuapp.com/',
  cache: new InMemoryCache(),
});

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <StacksProvider spacing={4}>
          <ScrollView>
            <Locations />
            <Stack space={10} padding={4} divider={<Divider />}>
              <Box.alignX />
              <Box.alignY />
              <Box.flex />
              <Box.padding />
              <Box.margin />
            </Stack>
            <AnimatedBox />
            <Timer />
          </ScrollView>
        </StacksProvider>
      </SafeAreaView>
    </ApolloProvider>
  );
};
