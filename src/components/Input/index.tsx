import React, { forwardRef, useMemo } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps } from 'react-native';

import { Row, Rows } from '@mobily/stacks';

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
    <Rows padding={3} space={2} style={{ position: 'relative' }}>
      <Row width="fluid">
        <TextInput ref={ref} {...props} style={[styles.input, { borderColor }]} />
      </Row>
      {errorMessage && (
        <Row width="fluid">
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </Row>
      )}
    </Rows>
  );
});

const styles = StyleSheet.create({
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
