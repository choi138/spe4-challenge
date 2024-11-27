import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  divider: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    backgroundColor: 'rgba(97, 0, 255, 0.3)',
  },
});

export const Divider: React.FC = () => {
  return <View style={styles.divider} />;
};
