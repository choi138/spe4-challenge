import React from 'react';
import {View} from 'react-native';

export interface PlaceHolderProps {
  width: number;
}

export const PlaceHolder: React.FC<PlaceHolderProps> = ({width}) => {
  return (
    <View
      style={{
        width,
        height: 60,
        backgroundColor: 'rgba(97, 0, 255, 0.05)',
        borderColor: 'rgba(97, 0, 255, 0.3)',
        borderWidth: 1,
      }}
    />
  );
};
