import React from "react";
import { StyleSheet, View } from "react-native";


const ListItemSeparator = ({ style }) => {
  return <View style={[styles.separator, style]} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 7,
    backgroundColor: 'transparent',
  },
});

export default ListItemSeparator;
