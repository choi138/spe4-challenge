import React, { forwardRef, useMemo } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

import { colors } from 'src/styles';

export interface InputCustomProps {
  errorMessage?: string;
}

export type InputProps = InputCustomProps & TextInputProps;

export const Input = forwardRef<TextInput, InputProps>(({ errorMessage, ...props }, ref) => {
  const borderColor = useMemo(() => {
    return errorMessage ? colors.red : colors.black;
  }, [errorMessage]);

  return (
    <View style={styles.container}>
      <TextInput ref={ref} {...props} style={[styles.input, { borderColor }]} />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
  },
  input: {
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 4,
    fontSize: 18,
    borderWidth: 1,
  },
  errorMessage: {
    color: colors.red,
  },
});
