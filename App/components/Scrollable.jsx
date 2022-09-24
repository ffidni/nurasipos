import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const Scrollable = ({ children }) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
    >
      {children}
    </ScrollView>
  );
};

export default Scrollable;
