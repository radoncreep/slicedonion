import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import AppNavigator from './app/navigation/Tab/AppNavigator';
import { NextEpisodeContext } from './app/util/nextContext';

export default function App() {
  const [ nextEpisode, setNextEpisode ] = useState();
  
  return (
    <NextEpisodeContext.Provider value={{ nextEpisode, setNextEpisode }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </NextEpisodeContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {}
});

