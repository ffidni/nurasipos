import { MaterialIcons } from "@expo/vector-icons";
import { Flex, HStack, Text, VStack } from "@react-native-material/core";
import React, { useState } from "react";
import CustomBar from "../../../components/CustomBar";

const CustomerDetail = ({ navigation }) => {
  const [customer, setCustomer] = useState({
    customerId: 1,
    customerName: "Haikal",
    email: "realityinaship@gmail.com",
    telephone: "082130089012",
    address: "Ciamis",
  });
  return (
    <>
      <CustomBar inverted={true} navigation={navigation} removeShadow={true} />
      <Flex bg="#007C5B" pb={30}>
        <HStack>
          <VStack w={"100%"} items="center" justify="center">
            <HStack items="center">
              <MaterialIcons name="delete" size={32} color="white" />
              <MaterialIcons name="account-circle" size={100} color="white" />
              <MaterialIcons name="edit" color="white" size={32} />
            </HStack>
            <Text color="white" variant="h5">
              Customer
            </Text>
          </VStack>
        </HStack>
      </Flex>
      <Flex fill bg="white" ph={20} pt={20}>
        <VStack spacing={20}>
          <VStack>
            <Text>Name</Text>
            <Text>{customer.customerName}</Text>
          </VStack>
          <VStack>
            <Text>Email</Text>
            <Text>{customer.email}</Text>
          </VStack>
          <VStack>
            <Text>Nomor HP</Text>
            <Text>{customer.telephone}</Text>
          </VStack>
          <VStack>
            <Text>Alamat</Text>
            <Text>{customer.address}</Text>
          </VStack>
        </VStack>
      </Flex>
    </>
  );
};

export default CustomerDetail;
