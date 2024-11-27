import {Box, Stack} from '@mobily/stacks';
import React from 'react';
import {Placeholder} from '../../../components';
import {Text} from 'react-native';

export const Margin: React.FC = () => {
  return (
    <Stack space={4}>
      <Text>Margin</Text>
      <Box margin={4}>
        <Placeholder />
      </Box>
      <Box marginX={-3}>
        <Placeholder />
      </Box>
      <Box marginY={-3}>
        <Placeholder />
      </Box>
      <Box marginLeft={4}>
        <Placeholder />
      </Box>
      <Box marginRight={4}>
        <Placeholder />
      </Box>
      <Box marginTop={4}>
        <Placeholder />
      </Box>
      <Box marginBottom={4}>
        <Placeholder />
      </Box>
    </Stack>
  );
};
