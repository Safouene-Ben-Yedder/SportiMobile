﻿import React, { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { Box, Text, Pressable, HStack, VStack, Spacer } from "native-base";

export const renderItem = ({ item, index, navigation }) => (
  <Box>
    <Pressable
      onPress={() => navigation.navigate("Ajout d'une compétence")}
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "white",
      }}
    >
      <Box pl="4" pr="5" py="2">
        <HStack alignItems="center" space={3}>
          <VStack>
            <Text
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
              bold
            >
              {item.name}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              {item.description}
            </Text>
          </VStack>
          <Spacer />
          <Text
            fontSize="xs"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            alignSelf="flex-start"
          >
            {item.stars}
          </Text>
        </HStack>
      </Box>
    </Pressable>
  </Box>
);
