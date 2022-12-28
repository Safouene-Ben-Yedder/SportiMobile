import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
import CompService from "../../../services/Comp.service";
import { Dialog, ALERT_TYPE } from "react-native-alert-notification";

export const CompForm = ({ navigation }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        link: "",
        visible: true,
        stars: 0,
      }}
      onSubmit={(values) => {
        CompService.postComp(values).then((rep) => console.log(rep));

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
              <FormControl.Label>Name</FormControl.Label>
              <Input
                name="name"
                placeholder="Nom du compétence"
                style={styles.textInput}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                keyboardType="name"
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
              <FormControl.Label>Link</FormControl.Label>
              <Input
                name="link"
                placeholder="Link"
                style={styles.textInput}
                onChangeText={handleChange("link")}
                onBlur={handleBlur("link")}
                value={values.link}
                keyboardType="link"
              />
            </Stack>
          </FormControl>

          <FormControl isRequired>
            <Stack mx="10" my="2">
              <FormControl.Label>Visible</FormControl.Label>
              <Checkbox value={values.visible} />
            </Stack>
          </FormControl>

          <FormControl isRequired>
            <Stack mx="10" my="2">
              <FormControl.Label>Stars</FormControl.Label>
              <Rating
                type="custom"
                ratingCount={5}
                imageSize={20}
                onFinishRating={values.stars}
                style={{ flex: 1 }}
              />
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
