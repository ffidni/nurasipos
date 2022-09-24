import { MaterialIcons } from "@expo/vector-icons";
import {
  Flex,
  VStack,
  Text,
  HStack,
  TextInput,
  Button,
} from "@react-native-material/core";
import React from "react";
import CustomBar from "../../../components/CustomBar";
import Scrollable from "../../../components/Scrollable";

const AddCustomer = ({ navigation }) => {
  return (
    <>
      <CustomBar inverted={true} navigation={navigation} removeShadow={true} />
      <Scrollable>
        <Flex bg="#007C5B" pb={30}>
          <HStack>
            <VStack w={"100%"} items="center" justify="center">
              <HStack ml={40} items="center">
                <MaterialIcons name="account-circle" size={100} color="white" />
                <MaterialIcons name="camera-alt" color="white" size={32} />
              </HStack>
              <Text color="white" variant="h5">
                Add Customer
              </Text>
            </VStack>
          </HStack>
        </Flex>
        <Flex fill bg="white" ph={20} pt={20}>
          <VStack>
            <VStack>
              <TextInput
                variant="standard"
                placeholder="Nama"
                color="#007C5B"
              />
            </VStack>
            <VStack>
              <TextInput
                variant="standard"
                placeholder="Email"
                color="#007C5B"
              />
            </VStack>
            <VStack>
              <TextInput
                variant="standard"
                placeholder="Nomor HP"
                color="#007C5B"
              />
            </VStack>
            <VStack>
              <TextInput
                variant="standard"
                placeholder="Alamat"
                color="#007C5B"
              />
            </VStack>
            <Text style={{ marginVertical: 20 }}>
              Pastikan email pelanggan terisi dengan benar (email yang telah
              tersimpan tidak dapat diubah)
            </Text>
            <Button style={{ marginTop: 20 }} title="Simpan" color="#007C5B" />
          </VStack>
        </Flex>
      </Scrollable>
    </>
  );
};

export default AddCustomer;
