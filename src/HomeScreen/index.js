import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NoInternet from "../NoInternet";
import { useGlobalContext } from "../Context";
import { PRIMARY_SCREEN_COLOR } from "../../res/colors";

const HomeScreen = () => {
  const { isConnected } = useGlobalContext();
  console.log(isConnected);

  return isConnected ? (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  ) : (
    <View style={styles.noInternetScreen}>
      <NoInternet />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PRIMARY_SCREEN_COLOR,
  },
  noInternetScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PRIMARY_SCREEN_COLOR,
  },
});
