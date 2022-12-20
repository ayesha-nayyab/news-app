import { StyleSheet, Text, View, StatusBar } from "react-native";
import React, { useContext } from "react";
import { PRIMARY_SCREEN_COLOR } from "../res/colors";
import { AppContext } from "../store/Context";
import NoInternet from "../components/NoInternet";

const HomeScreen = () => {
  const { isConnected } = useContext(AppContext);
  console.log(isConnected);

  return isConnected ? (
    <View style={styles.container}>
      <Text>Home</Text>
      <StatusBar backgroundColor="#3e2465" barStyle="ligth-content" />
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
