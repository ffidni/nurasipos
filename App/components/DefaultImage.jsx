import { Feather } from "@expo/vector-icons";
import { Box, Chip, VStack } from "@react-native-material/core";
import React from "react";

const DefaultImage = ({ p, iconSize }) => {
  return (
    <VStack items="center" spacing={10}>
      <Box bg="#EFF3F6" p={p}>
        <Feather name="image" size={iconSize} color="white" />
      </Box>
    </VStack>
  );
};

export default DefaultImage;
