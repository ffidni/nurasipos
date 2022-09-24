import React, { useState } from "react";
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
import CustomBar from "../../../components/CustomBar";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, Pressable, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProductItem from "../../../components/ProductItem";
import PlusButton from "../../../components/PlusButton";
import Search from "../../../components/Search";

const ProductList = ({ navigation }) => {
  const [products, setProducts] = useState([
    {
      productId: 1,
      productName: "Pocari",
      code: "000",
      stock: 1,
      basicPrice: 8000,
      sellingPrice: 10000,
    },
  ]);

  return (
    <>
      <CustomBar title="Produk" navigation={navigation} />

      <Flex fill bg="white" ph={20}>
        <VStack mt={20} spacing={30}>
          <HStack items="center" w={"100%"}>
            <MaterialIcons name="filter-list" size={32} color="#007C5B" />
            <Search placeholder={"Cari nama atau kode produk"} />
          </HStack>
          <FlatList
            keyExtractor={(item) => item.productId}
            data={products}
            renderItem={({ item }) => {
              return (
                <ProductItem
                  item={item}
                  onPress={() => navigation.push("ProdukDetail")}
                />
              );
            }}
          />
        </VStack>
      </Flex>
      <PlusButton onPress={() => navigation.push("AddProduk")} />
    </>
  );
};

export default ProductList;
