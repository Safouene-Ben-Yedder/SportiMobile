// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LieuForm } from "../../components/Lieu/LieuForm/LieuForm";
import { NativeBaseProvider } from "native-base";
import { LieuUpdateForm } from "../../components/Lieu/LieuUpdateForm/LieuUpdateForm";
import { CompUpdateForm } from "../../components/Compétences/CompUpdate/CompUpdateForm";

const Stack = createNativeStackNavigator();

export const CompCoachUpdate = ({ route, navigation }) => {
  return (
    <NativeBaseProvider>
      <CompUpdateForm navigation={navigation} route={route} />
    </NativeBaseProvider>
  );
};
