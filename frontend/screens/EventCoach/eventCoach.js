import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListEventScreen from "./listEventScreen";
import { EventCoachAdd } from "./eventCoachAdd";
import { EventCoachUpdate } from "./eventCoachUpdate";
import { EventCoachShow } from "./eventCoachShow";

const Stack = createNativeStackNavigator();

export const EventCoach = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Défis"
        component={ListEventScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Ajout d'un event" component={EventCoachAdd} />
      <Stack.Screen name="Modifier un event" component={EventCoachUpdate} />
      <Stack.Screen name="Afficher un event" component={EventCoachShow} />
    </Stack.Navigator>
  );
};
