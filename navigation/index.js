import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import SettingScreen from "../screens/SettingScreen";
import { PRIMARY_SCREEN_COLOR } from "../res/colors";

const Tab = createMaterialBottomTabNavigator();

export default function NavigationFile() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#3e2465"
      inactiveColor="#8366ae"
      barStyle={{ backgroundColor: PRIMARY_SCREEN_COLOR }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={{
          tabBarLabel: "Favourite",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
