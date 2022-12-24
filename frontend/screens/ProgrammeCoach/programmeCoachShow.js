// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { ProgrammeShow } from "../../components/Programme/ProgrammeShow/ProgrammeShow";

const Stack = createNativeStackNavigator();

export const ProgrammeCoachShow = ({ route, navigation }) => {
  return (
    <NativeBaseProvider>
      <ProgrammeShow navigation={navigation} route={route} />
    </NativeBaseProvider>
  );
};
