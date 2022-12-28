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
  Checkbox,
} from "native-base";
import CompService from "../../../services/Comp.service";
import { Rating } from "react-native-ratings";

export const CompUpdateForm = ({ route, navigation }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const { data } = route.params;
  return (
    <Formik
      initialValues={data}
      onSubmit={(values) => {
        console.log(values);
        CompService.updateComp(
          values._id,
          values.name,
          values.description,
          values.link,
          values.visible,
          values.stars
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
                ratingCount={5}
                showRating
                onFinishRating={values.stars}
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
