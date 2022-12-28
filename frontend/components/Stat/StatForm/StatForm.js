import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { styles } from "./style";
import { Rating } from "react-native-ratings";
import {
  Alert,
  FormControl,
  Input,
  Stack,
  VStack,
  HStack,
  Center,
  Checkbox,
} from "native-base";
import StatService from "../../../services/Stat.service";
import { Dialog, ALERT_TYPE } from "react-native-alert-notification";
import { SelectList } from "react-native-dropdown-select-list";

export const StatForm = ({ navigation }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const [selected1, setSelected1] = React.useState("");
  const data1 = [
    { key: "1", value: "Compteur" },
    { key: "2", value: "Timer" },
  ];
  const [selected2, setSelected2] = React.useState("");
  const data2 = [
    { key: "1", value: "Max" },
    { key: "2", value: "Min" },
  ];
  return (
    <Formik
      initialValues={{
        nom: "",
        description: "",
        type: "Compteur",
        unite: "",
        objectif: "Max",
        lien: "",
        visible: true,
      }}
      onSubmit={(values) => {
        StatService.postStat(values).then((rep) => console.log(rep));
        console.log(values);

        setTimeout(() => {
          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: "Success",
            textBody: "Joueur Invité !",
            button: "close",
          });
          navigation.goBack();
        }, 100);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <Stack my="10">
          <FormControl isRequired>
            <Stack mx="10" my="2">
              <FormControl.Label>Nom</FormControl.Label>
              <Input
                name="nom"
                placeholder="Nom du Statistique"
                style={styles.textInput}
                onChangeText={handleChange("nom")}
                onBlur={handleBlur("nom")}
                value={values.nom}
                keyboardType="nom"
              />
            </Stack>
          </FormControl>
          <FormControl isRequired>
            <Stack mx="10" my="2">
              <FormControl.Label>Description</FormControl.Label>
              <Input
                name="description"
                placeholder="Description"
                style={styles.textInput}
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
                keyboardType="description"
              />
            </Stack>
          </FormControl>
          <FormControl isRequired>
            <Stack mx="10" my="2">
              <FormControl.Label>Type</FormControl.Label>
              <SelectList
                setSelected={(val) => setSelected1(val)}
                data={data1}
                save="value"
                value={values.type}
              />
            </Stack>
          </FormControl>
          <FormControl isRequired>
            <Stack mx="10" my="2">
              <FormControl.Label>Unité</FormControl.Label>
              <Input
                name="unite"
                placeholder="Unite"
                style={styles.textInput}
                onChangeText={handleChange("unite")}
                onBlur={handleBlur("unite")}
                value={values.unite}
                keyboardType="unite"
              />
            </Stack>
          </FormControl>
          <FormControl isRequired>
            <Stack mx="10" my="2">
              <FormControl.Label>Objectif</FormControl.Label>
              <SelectList
                setSelected={(val) => setSelected2(val)}
                data={data2}
                save="value"
                value={values.objectif}
              />
            </Stack>
          </FormControl>
          <FormControl isRequired>
            <Stack mx="10" my="2">
              <FormControl.Label>Lien</FormControl.Label>
              <Input
                name="lien"
                placeholder="Lien"
                style={styles.textInput}
                onChangeText={handleChange("lien")}
                onBlur={handleBlur("lien")}
                value={values.lien}
                keyboardType="lien"
              />
            </Stack>
          </FormControl>

          <FormControl isRequired>
            <Stack mx="10" my="2">
              <FormControl.Label>Visible</FormControl.Label>
              <Checkbox value={values.visible} />
            </Stack>
          </FormControl>

          <Center>
            <TouchableOpacity style={styles.loginBtn}>
              <Text onPress={handleSubmit} style={styles.loginText}>
                AJOUTER
              </Text>
            </TouchableOpacity>
          </Center>
        </Stack>
      )}
    </Formik>
  );
};
