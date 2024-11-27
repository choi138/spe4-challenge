import React, { useState } from 'react';
import { Text } from 'react-native';

import { useIntervalWhen } from 'rooks';

export const Timer: React.FC = () => {
  const [value, setValue] = useState(3);

  useIntervalWhen(
    () => {
      setValue(value - 1);
    },
    1000,
    value > 0,
  );

  return <Text>Timer: {value}</Text>;
};
