import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export const ListItem = ({ onPress, style, title, towhere, value }) => {
  return (
      <TouchableHighlight underlayColor="#0f011f" onPress={onPress}>
        <View style={styles.container}>
          <Text style={[styles.title, style]} numberOfLines={2}>{title}</Text>
          { value && (
            <View style={styles.right}>
              <Text style={{ color: '#fff', fontSize: 13 }}>{value}</Text>
              <MaterialCommunityIcons
                color="silver"
                name="chevron-right"
                size={25}
              />
            </View>
          )}
        </View>
      </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  right: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: '#fff'
  },
});