import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import MainNavigator from "./components/MainNavigator/MainNavigator";
import { NativeBaseProvider } from "native-base";
import LoginNavigator from "./components/LoginNavigator/LoginNavigator";

export default function App() {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    AsyncStorage.getItem("@user").then((app) => {
      setUser(jwtDecode(app).role);
      console.log(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {user === "Coach" ? <MainNavigator /> : <LoginNavigator />}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}