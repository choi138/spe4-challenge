import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PHONE_REGEX } from 'src/constant';
import { Input } from 'src/components';

export interface FormValues {
  phone: string;
}

export const PhoneInputScreen: React.FC = () => {
  const {
    control,
    formState: { errors },
    trigger,
  } = useForm<FormValues>();

  return (
    <SafeAreaView style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: '전화번호는 필수 입력 값이에요',
          pattern: {
            value: PHONE_REGEX,
            message: '전화번호를 정확하게 입력해 주세요',
          },
        }}
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            errorMessage={errors.phone?.message}
            onBlur={onBlur}
            onChangeText={(value) => {
              onChange(value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
              trigger('phone');
            }}
            keyboardType="phone-pad"
            value={value}
            placeholder="전화번호"
          />
        )}
        name="phone"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
});
