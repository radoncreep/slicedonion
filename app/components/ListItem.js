import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";


export const ListItem = ({ icon, onPress, style, title, towhere, value }) => {
  const stream = 'Stream Using Cellular Data';
  const parental = "Parental Control"

  const renderTogglerIcon = () => ( <FontAwesome name={icon.name} size={icon.size} color={icon.color} /> );
    
  return (
      <TouchableHighlight underlayColor="#0f011f" onPress={onPress}>
        <View style={styles.container}>
          <Text style={[styles.title, style]} numberOfLines={2}>{title}</Text>
          { icon && (
            <View style={styles.right}>
              <Text style={{ color: '#fff', fontSize: 13 }}>{value}</Text>

              { title === stream || title === parental ? 
                  renderTogglerIcon()
                  :
                ( <MaterialCommunityIcons
                    color={icon.color}
                    name={icon.name}
                    size={icon.size}
                  /> 
                )
              }
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
    justifyContent: 'space-between',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: '#fff'
  },
});