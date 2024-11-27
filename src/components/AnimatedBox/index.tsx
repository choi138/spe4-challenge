import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

const DURATION = 300;

export const AnimatedBox: React.FC = () => {
  const opacity = useSharedValue(1);

  const onPressToggleOpacity = () => {
    opacity.value = withTiming(opacity.value === 1 ? 0 : 1, {
      duration: DURATION,
    });
  };

  return (
    <View>
      <Animated.View style={[styles.box, {opacity}]} />
      <Button onPress={onPressToggleOpacity} title="Click me" />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'violet',
  },
});
