// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { LieuShow } from "../../components/Lieu/LieuShow/LieuShow";
import { CompShow } from "../../components/Compétences/CompShow/CompShow";

const Stack = createNativeStackNavigator();

export const CompCoachShow = ({ route, navigation }) => {
  return (
    <NativeBaseProvider>
      <CompShow navigation={navigation} route={route} />
    </NativeBaseProvider>
  );
};
