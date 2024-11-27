import {Stack, StacksProvider} from '@mobily/stacks';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Box} from './src';

export const App: React.FC = () => {
  return (
    <SafeAreaView>
      <StacksProvider spacing={4}>
        <ScrollView>
          <Stack space={40} padding={4}>
            <Box.alignX />
            <Box.alignY />
            <Box.flex />
            <Box.padding />
            <Box.margin />
          </Stack>
        </ScrollView>
      </StacksProvider>
    </SafeAreaView>
  );
};
