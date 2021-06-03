import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import AppNavigator from './app/navigation/Tab/AppNavigator';
import rootReducer from './app/store/reducers/index';
import OfflinePage from './app/components/Offline/OfflineMode';


const store = createStore(rootReducer);

export default function App() {
  const netInfo = useNetInfo();

  
  return (
    <Provider store={store}>
      <NavigationContainer>
        {netInfo.isInternetReachable ? <AppNavigator /> : <OfflinePage /> }
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {}
});

