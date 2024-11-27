import React from 'react';
import { Text } from 'react-native';

import { Box, Stack } from '@mobily/stacks';

import { Placeholder } from '../../../components';

export const AlignX: React.FC = () => {
  return (
    <Stack space={4}>
      <Text>AlignX</Text>
      <Box alignX="left">
        <Placeholder width={60} />
      </Box>
      <Box alignX="center">
        <Placeholder width={60} />
      </Box>
      <Box alignX="right">
        <Placeholder width={60} />
      </Box>
      <Box alignX="between" direction="row">
        <Placeholder width={60} />
        <Placeholder width={60} />
        <Placeholder width={60} />
      </Box>
      <Box alignX="around" direction="row">
        <Placeholder width={60} />
        <Placeholder width={60} />
        <Placeholder width={60} />
      </Box>
      <Box alignX="evenly" direction="row">
        <Placeholder width={60} />
        <Placeholder width={60} />
        <Placeholder width={60} />
      </Box>
    </Stack>
  );
};
