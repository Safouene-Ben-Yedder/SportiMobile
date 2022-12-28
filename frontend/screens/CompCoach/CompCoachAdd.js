// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LieuForm } from "../../components/Lieu/LieuForm/LieuForm";
import { NativeBaseProvider } from "native-base";
import { CompForm } from "../../components/Compétences/CompForm/CompForm";

const Stack = createNativeStackNavigator();

export const CompCoachAdd = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <CompForm navigation={navigation} />
    </NativeBaseProvider>
  );
};
