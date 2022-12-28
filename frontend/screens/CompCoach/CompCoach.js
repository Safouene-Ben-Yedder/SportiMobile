import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListCompScreen from "./listCompScreen";
import { CompCoachAdd } from "./CompCoachAdd";
import { CompCoachUpdate } from "./CompCoachUpdate";
import { CompCoachShow } from "./CompCoachShow";

const Stack = createNativeStackNavigator();

export const CompCoach = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Compétences"
        component={ListCompScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Ajout d'une compétence" component={CompCoachAdd} />
      <Stack.Screen
        name="Modifier une competence"
        component={CompCoachUpdate}
      />
      <Stack.Screen name="Afficher une compétence" component={CompCoachShow} />
    </Stack.Navigator>
  );
};
