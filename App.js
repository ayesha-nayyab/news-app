import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationFile from "./src/navigation";
import AppProvider from "./src/screens/Context";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <NavigationFile />
      </NavigationContainer>
    </AppProvider>
  );
}
