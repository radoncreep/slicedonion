import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import AppNavigator from './app/navigation/Tab/AppNavigator';
import VideoPlayer from './app/components/VideoPlayer';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    // <LandingScreen />
    // <EpisodesTrayVertical />
    // <GenresComponent />
    // <VideoPlayer />
  );
}

const styles = StyleSheet.create({
  container: {}
})

