import React from "react";
import { Text, Stack } from "native-base";

export const CompShow = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <Stack my="10">
      <Stack mx="10" my="2">
        <Text py="1" fontSize={17}>
          <Text bold>Name: </Text>
          {data.name}
        </Text>
        <Text py="1" fontSize={17}>
          <Text bold>Description:</Text> {data.description}
        </Text>
        <Text py="1" fontSize={17}>
          <Text bold>link:</Text> {data.link}
        </Text>
        <Text py="1" fontSize={17}>
          <Text bold>Visible:</Text> {data.visible}
        </Text>
        <Text py="1" fontSize={17}>
          <Text bold>Stars:</Text> {data.stars}
        </Text>
      </Stack>
    </Stack>
  );
};
