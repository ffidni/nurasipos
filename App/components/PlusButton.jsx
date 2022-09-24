import { View, Text } from "react-native";
import React from "react";
import { IconButton } from "@react-native-material/core";
import { AntDesign } from "@expo/vector-icons";

const PlusButton = ({ onPress }) => {
  return (
    <IconButton
      onPress={onPress}
      style={{
        position: "absolute",
        right: 30,
        bottom: 25,
        elevation: 6,
      }}
      icon={<AntDesign name="pluscircle" size={48} color="#007C5B" />}
    />
  );
};

export default PlusButton;
