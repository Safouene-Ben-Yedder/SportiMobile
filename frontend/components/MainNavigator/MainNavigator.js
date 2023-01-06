import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { LieuCoach } from "../../screens/LieuCoach/lieuCoach";
import { View } from "native-base";
import { Button } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { ProgrammeCoach } from "../../screens/ProgrammeCoach/programmeCoach";
import { SeanceCoach } from "../../screens/SeanceCoach/seanceCoach";
import { DefiCoach } from "../../screens/DefiCoach/defiCoach";
import { EventCoach } from "../../screens/EventCoach/eventCoach";
import { InvitationForm } from "../Invitation/InvitationForm";
import { CompCoach } from "../../screens/CompCoach/CompCoach";
import { StatCoach } from "../../screens/StatCoach/StatCoach";
// import { PlayersCoach } from "../../screens/MyAccountCoach/PlayersCoach";
// import CoachProfile from "../../screens/CoachProfile/CoachProfile";

const Drawer = createDrawerNavigator();

const Deconnexion = () => {
  const { logout } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => {
          logout();
        }}
        title="Deconnexion"
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
      {/* <Drawer.Screen name="Mon compte" component={CoachProfile} />
      <Drawer.Screen name="Mes joueurs" component={PlayersCoach} /> */}
      <Drawer.Screen name="Mes Compétences" component={CompCoach} />
      <Drawer.Screen name="Mes statistiques" component={StatCoach} />
      <Drawer.Screen name="Mes programmes" component={ProgrammeCoach} />
      <Drawer.Screen name="Mes évenements" component={EventCoach} />
      <Drawer.Screen name="Mes defis" component={DefiCoach} />
      <Drawer.Screen name="Liste des seances" component={SeanceCoach} />

      {/* <Drawer.Screen name="Mon abonnement" component={AbonnementCoach} />
      <Drawer.Screen name="Mes programmes" component={SeanceCoach} />
      <Drawer.Screen name="Mes défis" component={DefiCoach} />
      <Drawer.Screen name="Mes évenements" component={EventCoach} />
      <Drawer.Screen name="Mes statistiques" component={StatScreen} />*/}
      <Drawer.Screen name="Inviter un joueur" component={InvitationForm} />
      <Drawer.Screen name="Mes lieux" component={LieuCoach} />
      <Drawer.Screen name="Deconnexion" component={Deconnexion} />
    </Drawer.Navigator>
  );
}
