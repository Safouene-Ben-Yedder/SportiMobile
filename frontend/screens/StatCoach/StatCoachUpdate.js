// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { StatUpdateForm } from "../../components/Stat/StatUpdate/StatUpdateForm";

const Stack = createNativeStackNavigator();

export const StatCoachUpdate = ({ route, navigation }) => {
  return (
    <NativeBaseProvider>
      <StatUpdateForm navigation={navigation} route={route} />
    </NativeBaseProvider>
  );
};
