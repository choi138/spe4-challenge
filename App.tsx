import {StacksProvider} from '@mobily/stacks';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {AlignX} from './src';

export const App: React.FC = () => {
  return (
    <SafeAreaView>
      <StacksProvider spacing={4}>
        <AlignX />
      </StacksProvider>
    </SafeAreaView>
  );
};
