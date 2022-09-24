import { TextInput, Button, VStack } from "@react-native-material/core";
import React from "react";
import CustomBar from "../../components/CustomBar";

const SendForgot = ({ navigation }) => {
  return (
    <>
      <CustomBar title={"Lupa Password"} navigation={navigation} />
      <VStack fill bg="white" spacing={20} ph={30} pt={20}>
        <TextInput variant="outlined" placeholder="Email" />
        <Button
          title="Send Reset Link"
          style={{ backgroundColor: "#007C5B" }}
        />
      </VStack>
    </>
  );
};

export default SendForgot;
