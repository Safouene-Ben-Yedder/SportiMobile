// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { SeanceForm } from "../../components/Seance/SeanceForm/SeanceForm";

const Stack = createNativeStackNavigator();

export const SeanceCoachAdd = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <SeanceForm navigation={navigation} />
    </NativeBaseProvider>
  );
};
