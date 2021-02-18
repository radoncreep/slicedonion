import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import AppNavigator from './app/navigation/Tab/AppNavigator';
import SmallCard from './app/components/SmallCard';
import ListTrayItems from './app/components/ListTrayItems';
import { LandingScreen } from './app/screens';
import LargeCard from './app/components/LargeCard';

export default function App() {
  return (
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
    <LandingScreen />
  );
}

const styles = StyleSheet.create({
  container: {}
})

