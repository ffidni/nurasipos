import { MaterialIcons } from "@expo/vector-icons";
import { Flex, HStack, Text, VStack } from "@react-native-material/core";
import React, { useState } from "react";
import { FlatList } from "react-native";
import CustomBar from "../../../components/CustomBar";
import ProductItem from "../../../components/ProductItem";

const StockDetail = ({ navigation }) => {
  const [product, setProduct] = useState({
    productId: 1,
    productName: "Pocari",
    code: "000",
    stock: 1,
    basicPrice: 8000,
  });
  const [history, setHistory] = useState([
    { historyId: 1, date: "19 Sep 2022", stock: 1, basicPrice: 8000 },
  ]);

  return (
    <>
      <CustomBar title="Detail Stok" navigation={navigation} />
      <Flex fill bg="white">
        <VStack ph={20} pv={20} spacing={30}>
          <HStack justify="between">
            <VStack>
              <Text style={{ fontWeight: "500" }}>{product.productName}</Text>
              <Text>{product.code}</Text>
            </VStack>
            <VStack>
              <Text>Stock</Text>
              <Text>{product.stock}</Text>
            </VStack>
          </HStack>
          <FlatList
            style={{ borderTopWidth: 1, paddingTop: 20 }}
            data={history}
            keyExtractor={(item) => item.historyId}
            renderItem={({ item }) => {
              return (
                <HStack justify="between">
                  <VStack>
                    <Text color="gray" style={{ fontStyle: "italic" }}>
                      tanggal entry
                    </Text>
                    <Text style={{ fontWeight: "500" }}>{item.date}</Text>
                    <Text color="gray" style={{ fontStyle: "italic" }}>
                      stok tersisa
                    </Text>
                    <Text>{item.stock}</Text>
                  </VStack>
                  <VStack>
                    <MaterialIcons name="delete" color="red" size={32} />

                    <Text color="gray" style={{ fontStyle: "italic" }}>
                      harga dasar
                    </Text>
                    <Text style={{ fontWeight: "500" }}>
                      {product.basicPrice}
                    </Text>
                  </VStack>
                </HStack>
              );
            }}
          />
        </VStack>
      </Flex>
    </>
  );
};

export default StockDetail;
