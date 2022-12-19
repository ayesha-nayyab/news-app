import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PRIMARY_SCREEN_COLOR, LIGHT_PURPLE_COLOR } from "../res/colors";
import { MaterialIcons } from "@expo/vector-icons";

const NoInternet = () => {
  return (
    <View styles={styles.container}>
      <MaterialIcons name="network-check" size={110} color="#3e2465" />
      <Text style={styles.noInterntText}>No Internet Connected!</Text>
    </View>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PRIMARY_SCREEN_COLOR,
  },
  noInterntText: {
    fontWeight: "500",
    fontSize: 16,
    color: LIGHT_PURPLE_COLOR,
  },
});
