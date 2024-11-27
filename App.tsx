import {Stack, StacksProvider} from '@mobily/stacks';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {AnimatedBox, Box, Divider, Timer} from './src';

export const App: React.FC = () => {
  return (
    <SafeAreaView>
      <StacksProvider spacing={4}>
        <ScrollView>
          {/* <Stack space={10} padding={4} divider={<Divider />}>
            <Box.alignX />
            <Box.alignY />
            <Box.flex />
            <Box.padding />
            <Box.margin />
          </Stack> */}
          {/* <AnimatedBox /> */}
          <Timer />
        </ScrollView>
      </StacksProvider>
    </SafeAreaView>
  );
};
