import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { Router } from './src/Router';

const client = new ApolloClient({
  uri: 'https://flyby-locations-sub.herokuapp.com/',
  cache: new InMemoryCache(),
});

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  );
};
