import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Controller, useForm } from 'react-hook-form';

import { Stack, StacksProvider } from '@mobily/stacks';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { AnimatedBox, Box, Divider, Locations, Timer } from './src';
import { Input } from './src/components/Input';
import { PHONE_REGEX } from './src/constant';

const client = new ApolloClient({
  uri: 'https://flyby-locations-sub.herokuapp.com/',
  cache: new InMemoryCache(),
});

export interface FormValues {
  phone: string;
}

export const App: React.FC = () => {
  const {
    control,
    formState: { errors },
    trigger,
  } = useForm<FormValues>();

  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <StacksProvider spacing={4}>
          <ScrollView>
            <Controller
              control={control}
              rules={{
                required: 'This is required',
                pattern: {
                  value: PHONE_REGEX,
                  message: 'Invalid phone number',
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
                  value={value}
                  placeholder="phone"
                />
              )}
              name="phone"
            />
            <Locations />
            <Stack space={10} padding={4} divider={<Divider />}>
              <Box.alignX />
              <Box.alignY />
              <Box.flex />
              <Box.padding />
              <Box.margin />
            </Stack>
            <AnimatedBox />
            <Timer />
          </ScrollView>
        </StacksProvider>
      </SafeAreaView>
    </ApolloProvider>
  );
};
