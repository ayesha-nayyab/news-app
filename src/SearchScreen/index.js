import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NoInternet from "../NoInternet";
import { useGlobalContext } from "../Context";
import { PRIMARY_SCREEN_COLOR } from "../../res/colors";

const SearchScreen = () => {
  const { isConnected } = useGlobalContext();
  console.log(isConnected);

  return isConnected ? (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  ) : (
    <View style={styles.noInternetScreen}>
      <NoInternet />
    </View>
  );
};
export default SearchScreen;

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
