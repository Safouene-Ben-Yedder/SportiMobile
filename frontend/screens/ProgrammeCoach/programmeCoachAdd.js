// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProgrammeForm } from "../../components/Programme/ProgrammeForm/ProgrammeForm";
import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator();

export const ProgrammeCoachAdd = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ProgrammeForm navigation={navigation} />
    </NativeBaseProvider>
  );
};
