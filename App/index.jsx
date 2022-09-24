import { Provider } from "@react-native-material/core";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./config/RootNavigation";

export default function App() {
  return (
    <Provider>
      <RootNavigation />
    </Provider>
  );
}
