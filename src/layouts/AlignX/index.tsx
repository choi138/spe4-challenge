import {Box, Stack} from '@mobily/stacks';
import React from 'react';
import {PlaceHolder} from '../../components';

export const AlignX: React.FC = () => {
  return (
    <Stack space={4} padding={3}>
      <Box alignX="left">
        <PlaceHolder width={60} />
      </Box>
      <Box alignX="center">
        <PlaceHolder width={60} />
      </Box>
      <Box alignX="right">
        <PlaceHolder width={60} />
      </Box>
      <Box alignX="between" direction="row">
        <PlaceHolder width={60} />
        <PlaceHolder width={60} />
        <PlaceHolder width={60} />
      </Box>
      <Box alignX="around" direction="row">
        <PlaceHolder width={60} />
        <PlaceHolder width={60} />
        <PlaceHolder width={60} />
      </Box>
      <Box alignX="evenly" direction="row">
        <PlaceHolder width={60} />
        <PlaceHolder width={60} />
        <PlaceHolder width={60} />
      </Box>
    </Stack>
  );
};
