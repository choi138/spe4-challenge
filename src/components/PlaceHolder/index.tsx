import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'src/styles';

export interface PlaceholderProps {
  width?: number;
}

export const Placeholder: React.FC<PlaceholderProps> = ({ width }) => {
  return <View style={[styles.placeholder, { width: width || '100%' }]} />;
};

const styles = StyleSheet.create({
  placeholder: {
    height: 60,
    backgroundColor: colors.darkPurple,
    borderColor: colors.purple,
    borderWidth: 1,
  },
});
