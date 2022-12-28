import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListStatScreen from "./listStatScreen";
import { StatCoachAdd } from "./StatCoachAdd";
import { StatCoachUpdate } from "./StatCoachUpdate";
import { StatCoachShow } from "./StatCoachShow";

const Stack = createNativeStackNavigator();

export const StatCoach = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Statistiques"
        component={ListStatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Ajout d'une statistique" component={StatCoachAdd} />
      <Stack.Screen
        name="Modifier une statistique"
        component={StatCoachUpdate}
      />
      <Stack.Screen name="Afficher une statistique" component={StatCoachShow} />
    </Stack.Navigator>
  );
};
