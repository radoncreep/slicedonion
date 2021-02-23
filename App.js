import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import AppNavigator from './app/navigation/Tab/AppNavigator';
import { LandingScreen } from './app/screens';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    // <LandingScreen />
    // <EpisodesTrayVertical />
  );
}

const styles = StyleSheet.create({
  container: {}
})

