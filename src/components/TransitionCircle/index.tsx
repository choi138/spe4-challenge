import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';

export interface TransitionCircleProps {
  backgroundColor: string;
}

const FADE_IN_DURATION = 1000;
const FADE_OUT_DURATION = 500;

export const TransitionCircle: React.FC<TransitionCircleProps> = ({ backgroundColor }) => {
  const opacity = useSharedValue(0);

  const onPressToggleOpacity = () => {
    console.log('onPressToggleOpacity');
    const isOpacityVisible = Math.ceil(opacity.value) === 1;

    opacity.value = withTiming(isOpacityVisible ? 0 : 1, {
      duration: isOpacityVisible ? FADE_OUT_DURATION : FADE_IN_DURATION,
    });
  };

  useEffect(() => {
    opacity.value = withTiming(1, { duration: FADE_IN_DURATION });
  }, []);

  return (
    <TouchableOpacity onPress={onPressToggleOpacity} activeOpacity={1}>
      <Animated.View style={[styles.box, { opacity, backgroundColor }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
