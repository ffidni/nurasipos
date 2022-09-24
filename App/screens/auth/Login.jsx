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

const Login = ({ navigation }) => {
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
          <VStack style={{}}>
            <TextInput
              variant="outlined"
              color="gray"
              placeholder="Email"
              style={{ width: "100%" }}
            />
          </VStack>
          <VStack style={{}}>
            <TextInput
              variant="outlined"
              color="gray"
              placeholder="Password"
              style={{ width: "100%" }}
            />
          </VStack>
          <Text
            style={{ textAlign: "right" }}
            color="#007C5B"
            onPress={() => navigation.push("Send")}
          >
            Lupa Password?
          </Text>
          <Button
            variant="contained"
            title="Login"
            style={{ backgroundColor: "#007C5B", width: "100%", marginTop: 10 }}
            onPress={() => navigation.navigate("Management")}
          />
        </VStack>
        <HStack spacing={5} mt={30} justify="center">
          <Text>Belum punya akun?</Text>
          <Text color="#007C5B" onPress={() => navigation.replace("Register")}>
            Register
          </Text>
        </HStack>
      </Flex>
    </ScrollView>
  );
};

export default Login;
