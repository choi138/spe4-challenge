import React from 'react';
import {StyleSheet, View} from 'react-native';

export interface PlaceholderProps {
  width?: number;
}

export const Placeholder: React.FC<PlaceholderProps> = ({width}) => {
  return <View style={[styles.placeholder, {width: width || '100%'}]} />;
};

const styles = StyleSheet.create({
  placeholder: {
    height: 60,
    backgroundColor: 'rgba(97, 0, 255, 0.05)',
    borderColor: 'rgba(97, 0, 255, 0.3)',
    borderWidth: 1,
  },
});
