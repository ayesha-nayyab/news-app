import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import FavouriteScreen from "../screens/FavouriteScreen";
import AlertScreen from "../screens/AlertScreen";
import { PRIMARY_SCREEN_COLOR } from "../../res/colors";

const Tab = createMaterialBottomTabNavigator();

export default function NavigationFile() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#3e2465"
      inactiveColor="#8366ae"
      barStyle={{ backgroundColor: PRIMARY_SCREEN_COLOR }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AlertScreen"
        component={AlertScreen}
        options={{
          tabBarLabel: "Alert",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={{
          tabBarLabel: "Favourite",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
