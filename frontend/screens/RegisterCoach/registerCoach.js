import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { NativeBaseProvider } from "native-base";
import { RegisterCoachForm } from "../../components/RegisterCoachForm/registerCoachForm";

export const RegisterCoach = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/Logo.png")} />
        <RegisterCoachForm navigation={navigation} />
      </View>
    </NativeBaseProvider>
  );
};
