import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { LieuCoach } from "../../screens/LieuCoach/lieuCoach";
// import AbonnementCoach from "../../screens/AbonnementCoach/AbonnementCoach";
// import DefiCoach from "../../screens/DefiCoach/defiCoach";
// import EventCoach from "../../screens/EventCoach/eventCoach";
// import SeanceCoach from "../../screens/SeanceCoach/SeanceCoach";
import { View } from "native-base";
import { Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { InvitationForm } from "../Invitation/InvitationForm";
// import StatScreen from "../../screens/manageStats/statsScreen";
// import InvitePlayer from "../../screens/InvitePlayer/invitePlayer";

const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => {
          AsyncStorage.clear();
        }}
        title="Logout"
      />
    </View>
  );
};

export default function MainNavigator() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Mes lieux"
      screenOptions={{
        headerStyle: { backgroundColor: "#00BFFF" },
        headerTintColor: "#fff",
      }}
    >
      <Drawer.Screen name="Mes lieux" component={LieuCoach} />
      {/* <Drawer.Screen name="Mon abonnement" component={AbonnementCoach} />
      <Drawer.Screen name="Mes programmes" component={SeanceCoach} />
      <Drawer.Screen name="Mes défis" component={DefiCoach} />
      <Drawer.Screen name="Mes évenements" component={EventCoach} />
      <Drawer.Screen name="Mes statistiques" component={StatScreen} />*/}
      <Drawer.Screen name="Inviter un joueur" component={InvitationForm} />

      <Drawer.Screen name="Logout" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
