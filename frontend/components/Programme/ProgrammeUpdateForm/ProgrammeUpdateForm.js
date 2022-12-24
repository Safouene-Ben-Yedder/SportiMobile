import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { styles } from "./style";
import {
  Alert,
  FormControl,
  Input,
  Stack,
  VStack,
  HStack,
  Center,
} from "native-base";
import ProgrammeService from "../../../services/programme.service";

export const ProgrammeUpdateForm = ({ route, navigation }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const { data } = route.params;
  return (
    <Formik
      initialValues={data}
      onSubmit={(values) => {
        console.log(values);
        ProgrammeService.updateProgramme(
          values._id,
          values.title,
          values.description,
          values.src,
          values.video
        )
          .then((rep) => console.log("resp", rep))
          .catch((e) => console.log("error", e));
        setTimeout(() => {
          navigation.goBack();
        }, 200);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <Stack my="10">
          <FormControl isRequired>
            <Stack mx="10" my="2">
              <FormControl.Label>Titre</FormControl.Label>
              <Input
                name="title"
                placeholder="Titre du programme"
                style={styles.textInput}
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                value={values.title}
                keyboardType="title"
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
              <FormControl.Label>src</FormControl.Label>
              <Input
                name="src"
                placeholder="Src"
                style={styles.textInput}
                onChangeText={handleChange("src")}
                onBlur={handleBlur("src")}
                value={values.src}
                keyboardType="src"
              />
            </Stack>
          </FormControl>

          <FormControl isRequired>
            <Stack mx="10" my="2">
              <FormControl.Label>video</FormControl.Label>
              <Input
                name="video"
                placeholder="Video"
                style={styles.textInput}
                onChangeText={handleChange("video")}
                onBlur={handleBlur("video")}
                value={values.video}
                keyboardType="video"
              />
            </Stack>
          </FormControl>

          <Center>
            <TouchableOpacity style={styles.loginBtn}>
              <Text onPress={handleSubmit} style={styles.loginText}>
                EDIT
              </Text>
            </TouchableOpacity>
          </Center>
        </Stack>
      )}
    </Formik>
  );
};
