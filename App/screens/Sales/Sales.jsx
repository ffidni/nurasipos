import {
  FontAwesome5,
  Foundation,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  ListItem,
  Pressable,
  Text,
  VStack,
  Wrap,
} from "@react-native-material/core";
import React, { useState } from "react";
import { FlatList, TextInput } from "react-native";
import CustomBar from "../../components/CustomBar";

const Sales = ({ navigation }) => {
  const [showDrop, setShowDrop] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const [categoryMode, setCategoryMode] = useState(false);
  const [categories, setCategories] = useState([
    { categoryId: 1, categoryName: "Foods" },
    { categoryId: 2, categoryName: "Drinks" },
  ]);
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
      <CustomBar menu={true} navigation={navigation} title="Transaksi Baru" />
      <Flex fill bg="white" ph={20}>
        <HStack
          justify="center"
          items="center"
          spacing={20}
          borderBottom={1}
          pv={10}
          borderBottomColor={"lightgray"}
        >
          {searchMode && (
            <HStack>
              <TextInput
                style={{ flex: 1, paddingHorizontal: 10 }}
                placeholder="Cari nama atau kode"
              />
              <IconButton
                onPress={() => setSearchMode(false)}
                icon={<MaterialIcons name="close" size={24} />}
              />
            </HStack>
          )}
          {!searchMode && !categoryMode && (
            <>
              <IconButton
                onPress={() => setSearchMode(true)}
                icon={<MaterialIcons name="search" color="#007C5B" size={32} />}
              />
              <IconButton
                onPress={() => setCategoryMode(true)}
                icon={
                  <MaterialCommunityIcons
                    name="barcode"
                    color="#007C5B"
                    size={32}
                  />
                }
              />
            </>
          )}
          {!searchMode && (
            <Pressable
              style={{
                flex: categoryMode ? 1 : null,
              }}
              onPress={() => setCategoryMode(!categoryMode)}
            >
              <HStack items="center" pv={categoryMode ? 8 : 0}>
                <Text>All Item</Text>
                <MaterialIcons name="keyboard-arrow-down" size={32} />
              </HStack>
            </Pressable>
          )}
        </HStack>
        {!categoryMode ? (
          <>
            <FlatList
              data={products}
              keyExtractor={(item) => item.productId}
              renderItem={({ item }) => {
                return (
                  <Pressable>
                    <HStack items="center" pv={20} justify="between">
                      <VStack>
                        <Text>{item.productName}</Text>
                        <Text>{`${item.stock} * ${item.sellingPrice}`}</Text>
                      </VStack>
                      <Box border={1} ph={5} mr={5}>
                        <Text>0</Text>
                      </Box>
                    </HStack>
                  </Pressable>
                );
              }}
            />

            <Pressable onPress={() => navigation.push("Cart")}>
              <Flex
                position="absolute"
                bg="#EFF3F6"
                justify="center"
                items="center"
                w={80}
                h={80}
                radius={50}
                bottom={25}
                right={25}
              >
                <FontAwesome5 name="shopping-bag" size={56} color="white" />
              </Flex>
            </Pressable>
          </>
        ) : (
          <>
            <FlatList
              data={categories}
              keyExtractor={(item) => item.categoryId}
              renderItem={({ item }) => {
                return <ListItem title={item.categoryName} />;
              }}
            />
          </>
        )}
      </Flex>
    </>
  );
};

export default Sales;
