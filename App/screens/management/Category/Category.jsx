import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Flex,
  HStack,
  IconButton,
  ListItem,
  Text,
  TextInput,
  VStack,
} from "@react-native-material/core";
import React, { useState } from "react";
import { FlatList } from "react-native";
import CustomBar from "../../../components/CustomBar";

const Category = ({ navigation }) => {
  const [categories, setCategories] = useState([
    { categoryId: 1, categoryName: "Foods" },
  ]);

  return (
    <>
      <CustomBar title="Kategori" centerTitle={true} navigation={navigation} />
      <Flex fill bg="white">
        <VStack>
          <VStack ph={25} pv={20}>
            <Text>Tambah kategori produk/jasa</Text>
            <HStack>
              <TextInput
                variant="outlined"
                color="#007C5B"
                placeholder="Masukan nama kategori"
                inputContainerStyle={{ borderRadius: 8 }}
                inputStyle={{ borderRadius: 8, paddingHorizontal: 5 }}
                style={{ flex: 1 }}
              />
              <IconButton
                icon={<AntDesign name="plus" color="#007C5B" size={28} />}
              />
            </HStack>
          </VStack>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.categoryId}
            renderItem={({ item }) => {
              return (
                <ListItem
                  title={item.categoryName}
                  trailing={
                    <MaterialCommunityIcons
                      name="delete-outline"
                      color="red"
                      size={28}
                    />
                  }
                />
              );
            }}
          />
        </VStack>
      </Flex>
    </>
  );
};

export default Category;
