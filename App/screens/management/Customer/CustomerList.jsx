import {
  Box,
  Flex,
  ListItem,
  Text,
  VStack,
  Wrap,
} from "@react-native-material/core";
import React, { useState } from "react";
import { FlatList } from "react-native";
import CustomBar from "../../../components/CustomBar";
import PlusButton from "../../../components/PlusButton";
import Search from "../../../components/Search";

const CustomerList = ({ navigation }) => {
  const [customers, setCustomers] = useState([
    {
      customerId: 1,
      customerName: "Haikal",
      customerEmail: "realityinaship@gmail.com",
    },
  ]);

  return (
    <>
      <CustomBar title="Customer" navigation={navigation} />
      <Flex fill bg="white" ph={10} pv={20}>
        <VStack>
          <Wrap>
            <Search placeholder={"Nama, email, atau nomor hp"} />
          </Wrap>
          <FlatList
            data={customers}
            keyExtractor={(item) => item.customerId}
            renderItem={({ item }) => {
              return (
                <ListItem
                  onPress={() => navigation.push("CustomerDetail")}
                  leadingMode="avatar"
                  leading={
                    <Box bg="gray" radius={50} p={15}>
                      <Text color="white" style={{ fontWeight: "500" }}>
                        {`${
                          item.customerName[0] + item.customerName[1]
                        }`.toUpperCase()}
                      </Text>
                    </Box>
                  }
                  title={item.customerName}
                  secondaryText={item.customerEmail}
                />
              );
            }}
          />
        </VStack>
        <PlusButton onPress={() => navigation.push("AddCustomer")} />
      </Flex>
    </>
  );
};

export default CustomerList;
