import React from 'react';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import { TimerProvider } from './src/contexts/Timer';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <TimerProvider>
      <Routes />
    </TimerProvider>
  );
}
