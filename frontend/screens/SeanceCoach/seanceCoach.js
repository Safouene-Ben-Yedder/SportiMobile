import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListSeanceScreen from "./listSeanceScreen";
import { SeanceCoachAdd } from "./seanceCoachAdd";
import { SeanceCoachUpdate } from "./seanceCoachUpdate";
import { SeanceCoachShow } from "./seanceCoachShow";

const Stack = createNativeStackNavigator();

export const SeanceCoach = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="seances"
        component={ListSeanceScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Ajout d'un seance" component={SeanceCoachAdd} />
      <Stack.Screen name="Modifier un seance" component={SeanceCoachUpdate} />
      <Stack.Screen name="Afficher un seance" component={SeanceCoachShow} />
    </Stack.Navigator>
  );
};
