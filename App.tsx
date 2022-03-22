import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Loading />
      </View>
    )
  }

  return (
    <>
      <StatusBar backgroundColor="#5C6FAD" />
      <Routes />
    </>
  )
}