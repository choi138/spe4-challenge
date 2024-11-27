import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Box } from '@mobily/stacks';

import { Placeholder } from '../../../components';

export const AlignY: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>AlignY</Text>
      <Box flex="fluid" direction="row" alignX="between">
        <Box alignY="top">
          <Placeholder width={60} />
        </Box>
        <Box alignY="center">
          <Placeholder width={60} />
        </Box>
        <Box alignY="bottom">
          <Placeholder width={60} />
        </Box>
        <Box alignY="between">
          <Placeholder width={60} />
          <Placeholder width={60} />
          <Placeholder width={60} />
        </Box>
        <Box alignY="around">
          <Placeholder width={60} />
          <Placeholder width={60} />
          <Placeholder width={60} />
        </Box>
        <Box alignY="evenly">
          <Placeholder width={60} />
          <Placeholder width={60} />
          <Placeholder width={60} />
        </Box>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 440,
    rowGap: 16,
  },
});
