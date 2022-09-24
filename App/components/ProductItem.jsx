import React from "react";
import {
  AppBar,
  Chip,
  Flex,
  HStack,
  ListItem,
  TextInput,
  VStack,
  Text,
  Box,
} from "@react-native-material/core";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProductItem = ({ onPress, onLongPress, item }) => {
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <HStack fill items="center">
        <Box bg="#EFF3F6" p={30} radius={8}>
          <Text>{item.productName[0] + item.productName[1]}</Text>
        </Box>
        <HStack fill ml={20} justify="between" items="center">
          <VStack>
            <Text style={{ fontWeight: "bold" }}>{item.productName}</Text>
            <Text>{item.code}</Text>
          </VStack>
          <VStack items="end">
            <Chip
              label={item.stock.toString()}
              color="white"
              style={{
                backgroundColor: "#007C5B",
                justifyContent: "center",
              }}
            />
            <Text>
              {item.basicPrice} - {item.sellingPrice}
            </Text>
          </VStack>
        </HStack>
      </HStack>
    </TouchableOpacity>
  );
};

export default ProductItem;
