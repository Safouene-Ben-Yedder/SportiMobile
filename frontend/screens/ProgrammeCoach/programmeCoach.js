import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListProgrammeScreen from "./listProgrammeScreen";
import { ProgrammeCoachAdd } from "./programmeCoachAdd";
import { ProgrammeCoachUpdate } from "./programmeCoachUpdate";
import { ProgrammeCoachShow } from "./programmeCoachShow";

const Stack = createNativeStackNavigator();

export const ProgrammeCoach = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Programmes"
        component={ListProgrammeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Ajout d'un programme" component={ProgrammeCoachAdd} />
      <Stack.Screen
        name="Modifier un programme"
        component={ProgrammeCoachUpdate}
      />
      <Stack.Screen
        name="Afficher un programme"
        component={ProgrammeCoachShow}
      />
    </Stack.Navigator>
  );
};
