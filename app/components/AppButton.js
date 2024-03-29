import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colorPallete } from "../utils/colors";

const AppButton = ({ color = "textPurple", disabled=false, onPress, title }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: disabled ? 'grey' : colorPallete[color] }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colorPallete.smallBgPurple,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "70%",
    marginVertical: 10,
    alignSelf: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
