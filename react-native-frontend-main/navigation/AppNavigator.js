import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import LevelScreen from "../screens/LevelScreen";
import TrayScreen from "../screens/TrayScreen";
import ScanScreen from "../screens/ScanScreen";

const MyStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="Login" component={LoginScreen} />
        <MyStack.Screen name="Home" component={HomeScreen} />
        <MyStack.Screen name="Level" component={LevelScreen} />
        <MyStack.Screen name="Tray" component={TrayScreen} />
        <MyStack.Screen name="Scan" component={ScanScreen} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
