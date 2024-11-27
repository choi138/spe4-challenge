import {Box, Stack} from '@mobily/stacks';
import React from 'react';
import {Placeholder} from '../../../components';
import {Text} from 'react-native';

export const Padding: React.FC = () => {
  return (
    <Stack space={4}>
      <Text>Padding</Text>
      <Box padding={4}>
        <Placeholder />
      </Box>
      <Box paddingX={4}>
        <Placeholder />
      </Box>
      <Box paddingY={4}>
        <Placeholder />
      </Box>
      <Box paddingLeft={4}>
        <Placeholder />
      </Box>
      <Box paddingRight={4}>
        <Placeholder />
      </Box>
      <Box paddingTop={4}>
        <Placeholder />
      </Box>
      <Box paddingBottom={4}>
        <Placeholder />
      </Box>
    </Stack>
  );
};
