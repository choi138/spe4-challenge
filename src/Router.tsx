import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './screens';
import { PhoneInputScreen } from './screens/phoneInput';

export type RootStackParamList = {
  Home: undefined;
  PhoneInput: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Router: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PhoneInput" component={PhoneInputScreen} />
    </Stack.Navigator>
  );
};
