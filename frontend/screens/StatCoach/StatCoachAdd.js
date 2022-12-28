// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { StatForm } from "../../components/Stat/StatForm/StatForm";

const Stack = createNativeStackNavigator();

export const StatCoachAdd = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <StatForm navigation={navigation} />
    </NativeBaseProvider>
  );
};
