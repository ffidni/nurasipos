import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Pressable,
  Text,
  VStack,
} from "@react-native-material/core";
import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import CustomBar from "../../components/CustomBar";

const Payment = ({ navigation }) => {
  const total = 10000;
  const [pay, setPay] = useState(0);
  const [change, setChange] = useState(0);
  const keys = [
    ["7", "8", "9", "C"],
    ["4", "5", "6", "⌫"],
    ["1", "2", "3", ""],
    ["0", "000", ".", ""],
  ];
  const [success, setSuccess] = useState(false);

  return (
    <>
      {!success && (
        <CustomBar
          navigation={navigation}
          title={`Total: ${total}`}
          centerTitle={true}
          trailing={
            <Pressable onPress={() => setSuccess(true)}>
              <Box bg="#007C5B" mr={10} p={5}>
                <MaterialIcons name="check" size={26} color="white" />
              </Box>
            </Pressable>
          }
        />
      )}

      <Flex fill bg="white">
        {success ? (
          <VStack spacing={50} ph={20} pt={20}>
            <VStack justify="center" items="center" spacing={20}>
              <AntDesign name="checkcircle" color="lightgreen" size={100} />
              <VStack items="center">
                <Text variant="h5" style={{ fontWeight: "500" }}>
                  Good Job!
                </Text>
                <Text>Transaksi sukses!</Text>
              </VStack>
            </VStack>
            <HStack justify="between">
              <Text>Kembalian</Text>
              <Text>{change}</Text>
            </HStack>
            <VStack spacing={10}>
              <Button
                color="#007C5B"
                title="Transaksi baru"
                onPress={() => navigation.replace("Transaction")}
              />
              <Button
                leading={
                  <MaterialIcons name="print" size={24} color="#007C5B" />
                }
                color="#007C5B"
                variant="outlined"
                title="Print Receipt"
              />
              <Button
                color="#007C5B"
                variant="outlined"
                title="Kirim Email"
                leading={
                  <MaterialIcons name="mail" size={24} color="#007C5B" />
                }
              />
            </VStack>
          </VStack>
        ) : (
          <>
            <Text
              color="#007C5B"
              variant="h3"
              style={{ textAlign: "center", marginVertical: 20 }}
            >
              Rp {pay}
            </Text>
            {keys.map((key) => {
              return (
                <Flex style={{ flexDirection: "row", flex: 1 }}>
                  {key.map((item) => (
                    <TouchableOpacity
                      style={{
                        flex: item === "0" ? 2 : 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onPress={() => {}}
                      key={item}
                    >
                      <Text style={{ fontSize: 42, color: "#333" }}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </Flex>
              );
            })}
          </>
        )}
      </Flex>
    </>
  );
};

export default Payment;
