import {Box, Stack} from '@mobily/stacks';
import React from 'react';
import {Placeholder} from '../../../components';
import {Text} from 'react-native';

export const Flex: React.FC = () => {
  return (
    <Stack space={4}>
      <Text>Flex</Text>
      <Box flex="fluid">
        <Placeholder />
      </Box>
      <Box direction="row">
        <Box flex="4/5">
          <Placeholder />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="3/4">
          <Placeholder />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="2/3">
          <Placeholder />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="3/5">
          <Placeholder />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="1/2">
          <Placeholder />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="1/3">
          <Placeholder />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="1/4">
          <Placeholder />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="1/5">
          <Placeholder />
        </Box>
      </Box>
      <Box direction="row">
        <Box flex="content">
          <Placeholder width={320} />
        </Box>
      </Box>
    </Stack>
  );
};
