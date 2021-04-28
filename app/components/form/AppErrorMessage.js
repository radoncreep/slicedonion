import React from "react";
import { StyleSheet, Text } from "react-native";

const AppErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: { 
    color: "red",
    alignSelf: "flex-start",
    paddingLeft: 12
  },
});

export default AppErrorMessage;
