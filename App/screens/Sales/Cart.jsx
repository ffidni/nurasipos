import React, { useState } from "react";
import CustomBar from "../../components/CustomBar";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@react-native-material/core";
import { FlatList, Pressable, TextInput } from "react-native";
import CustomModal from "../../components/CustomModal";

const Cart = ({ navigation }) => {
  const [selected, setSelected] = useState([
    {
      productId: 1,
      productName: "Pocari",
      code: "000",
      stock: 1,
      basicPrice: 8000,
      sellingPrice: 10000,
      qty: 1,
    },
  ]);
  const [dialog, setDialog] = useState(false);
  const [product, setProduct] = useState({});

  return (
    <>
      <CustomModal dialog={dialog}>
        <VStack ph={20} pt={10} spacing={20} divider={true}>
          <HStack justify="between" items="center">
            <VStack>
              <Text style={{ fontWeight: "500" }}>{product.productName}</Text>
              <Text>{product.code}</Text>
            </VStack>
            <VStack>
              <Text>{product.sellingPrice}</Text>
              <Text>{product.stock} stok</Text>
            </VStack>
          </HStack>
          <HStack>
            <IconButton icon={<AntDesign name="minus" size={42} />} />
            <TextInput
              style={{ flex: 1, fontSize: 36, textAlign: "center" }}
              value={product.qty && product.qty.toString()}
            />
            <IconButton icon={<AntDesign name="plus" size={42} />} />
          </HStack>
          <HStack
            divider={true}
            style={{ borderTopWidth: 1, borderColor: "gray" }}
            dividerStyle={{ backgroundColor: "gray" }}
            mb={10}
          >
            <Button
              style={{ flex: 1, borderColor: "#007C5B", borderRadius: 0 }}
              title="Hapus"
              variant="text"
              compact
              color="#007C5B"
              onPress={() => setDialog(false)}
            />
            <Button
              style={{ flex: 1, borderColor: "#007C5B" }}
              title="Simpan"
              variant="text"
              compact
              color="#007C5B"
              onPress={() => {}}
            />
          </HStack>
        </VStack>
      </CustomModal>
      <CustomBar
        title="10,000"
        navigation={navigation}
        centerTitle={true}
        trailing={
          <Pressable onPress={() => navigation.push("Payment")}>
            <Box bg="#007C5B" mr={10} p={5}>
              <MaterialIcons name="check" size={26} color="white" />
            </Box>
          </Pressable>
        }
      />
      <Flex fill bg="white" ph={30}>
        <FlatList
          data={selected}
          keyExtractor={(item) => item.productId}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => {
                  setProduct(item);
                  setDialog(true);
                }}
              >
                <HStack items="center" pv={20} justify="between">
                  <VStack>
                    <Text>{item.productName}</Text>
                    <Text>{`${item.qty} * ${item.sellingPrice} = ${
                      item.qty * item.sellingPrice
                    }`}</Text>
                  </VStack>
                  <Box border={1} ph={5} mr={5}>
                    <Text>{item.qty}</Text>
                  </Box>
                </HStack>
              </Pressable>
            );
          }}
        />
      </Flex>
    </>
  );
};

export default Cart;
