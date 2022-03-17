import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu'

import { Presentation } from './src/pages/Presentation';

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Carregando</Text>
      </View>
    )
  }

  return (
    <>
      <StatusBar backgroundColor="#5C6FAD" />
      <Presentation />
    </>
  )
}