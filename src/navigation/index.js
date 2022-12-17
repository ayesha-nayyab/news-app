import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import HomeScreen from "../HomeScreen";
import FavouriteScreen from "../FavouriteScreen";
import AlertScreen from "../AlertScreen";
import SearchScreen from "../SearchScreen";
import { PRIMARY_SCREEN_COLOR } from "../../res/colors";

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
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={26} color={color} />
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
