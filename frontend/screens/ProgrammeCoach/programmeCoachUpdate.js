// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProgrammeForm } from "../../components/Programme/ProgrammeForm/ProgrammeForm";
import { NativeBaseProvider } from "native-base";
import { ProgrammeUpdateForm } from "../../components/Programme/ProgrammeUpdateForm/ProgrammeUpdateForm";

const Stack = createNativeStackNavigator();

export const ProgrammeCoachUpdate = ({ route, navigation }) => {
  return (
    <NativeBaseProvider>
      <ProgrammeUpdateForm navigation={navigation} route={route} />
    </NativeBaseProvider>
  );
};
