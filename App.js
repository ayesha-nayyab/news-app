import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import NavigationFile from "./navigation";
import { AppProvider } from "./store/Context";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <NavigationFile />
      </NavigationContainer>
    </AppProvider>
  );
}
