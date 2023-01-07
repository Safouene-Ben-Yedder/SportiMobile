import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { RegisterCoach } from "../../screens/RegisterCoach/registerCoach";

const Drawer = createDrawerNavigator();

export default function RegisterNavigator() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Register"
      screenOptions={{
        headerStyle: { backgroundColor: "blue" },
        headerTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="Register"
        component={RegisterCoach}
        headerShown={false}
        options={{ headerMode: "none", headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
