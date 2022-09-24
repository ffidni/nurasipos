import { MaterialIcons } from "@expo/vector-icons";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  Flex,
  HStack,
  Text,
  TextInput,
  VStack,
  Wrap,
} from "@react-native-material/core";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import CustomBar from "../../../components/CustomBar";
import ProductItem from "../../../components/ProductItem";
import Search from "../../../components/Search";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CustomModal from "../../../components/CustomModal";

const StockList = ({ navigation }) => {
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

  const [dialog, setDialog] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <CustomModal dialog={dialog}>
        <VStack ph={20} pv={20} spacing={20}>
          <Text variant="h5" style={{ textAlign: "center" }}>
            Manajemen Stok
          </Text>
          <HStack justify="between">
            <BouncyCheckbox
              fillColor="#007C5B"
              text="Tambah"
              textStyle={{ textDecorationLine: "none" }}
            />
            <BouncyCheckbox
              fillColor="#007C5B"
              text="Kurangi"
              textStyle={{ textDecorationLine: "none" }}
            />
          </HStack>
          <HStack justify="between" spacing={30}>
            <TextInput
              variant="outlined"
              style={{ flex: 1 }}
              placeholder="Harga Dasar"
            />
            <TextInput
              variant="outlined"
              style={{ flex: 1 }}
              placeholder="Jumlah"
            />
          </HStack>

          <Button
            style={{ borderColor: "#007C5B", borderWidth: 1 }}
            title="Lihat Detail Stok"
            variant="text"
            compact
            color="#007C5B"
            onPress={() => {
              navigation.push("StockDetail");
              setDialog(false);
            }}
          />
        </VStack>

        <HStack
          divider={true}
          style={{ borderTopWidth: 1, borderColor: "gray" }}
          dividerStyle={{ backgroundColor: "gray" }}
          mb={10}
        >
          <Button
            style={{ flex: 1, borderColor: "#007C5B", borderRadius: 0 }}
            title="Batal"
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
      </CustomModal>
      <CustomBar navigation={navigation} title="Stok" />
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
                  onPress={() => {
                    setSelected(item);
                    setDialog(true);
                  }}
                />
              );
            }}
          />
        </VStack>
      </Flex>
    </>
  );
};

export default StockList;
