import React from "react";
import {
  Flex,
  VStack,
  Text,
  TextInput,
  Button,
  HStack,
} from "@react-native-material/core";
import { ScrollView } from "react-native-gesture-handler";

const Register = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        backgroundColor: "white",
        paddingHorizontal: 25,
        flexGrow: 1,
      }}
    >
      <Flex>
        <Text variant="h4" style={{ textAlign: "center", fontWeight: "400" }}>
          Nurasi Kasir
        </Text>
        <VStack mt={40} spacing={12}>
          <TextInput
            variant="outlined"
            placeholder="Nama"
            color="gray"
            style={{ width: "100%" }}
          />
          <VStack style={{}}>
            <TextInput
              variant="outlined"
              placeholder="Email"
              color="gray"
              style={{ width: "100%" }}
            />
          </VStack>
          <VStack style={{}}>
            <TextInput
              variant="outlined"
              placeholder="Password"
              color="gray"
              style={{ width: "100%" }}
            />
          </VStack>
          <VStack style={{}}>
            <TextInput
              variant="outlined"
              placeholder="Nomor HP"
              color="gray"
              style={{ width: "100%" }}
            />
          </VStack>
          <Button
            variant="contained"
            title="Register"
            style={{ backgroundColor: "#007C5B", width: "100%", marginTop: 10 }}
          />
        </VStack>
        <HStack spacing={5} mt={30} justify="center">
          <Text>Sudah punya akun?</Text>
          <Text color="#007C5B" onPress={() => navigation.replace("Login")}>
            Login
          </Text>
        </HStack>
      </Flex>
    </ScrollView>
  );
};

export default Register;
