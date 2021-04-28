import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet } from 'react-native';

import AppNavigator from './app/navigation/Tab/AppNavigator';
import historyReducer from './app/store/historyReducer';

const store = createStore(historyReducer);

export default function App() {
  const [ nextEpisode, setNextEpisode ] = useState();
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {}
});

