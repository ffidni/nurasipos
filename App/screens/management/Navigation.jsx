import React from "react";
import {
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { FlatList } from "react-native";
import { Flex, ListItem, Text, AppBar } from "@react-native-material/core";
import CustomBar from "../../components/CustomBar";

const Navigation = ({ navigation }) => {
  const menus = [
    {
      icon: <Feather name="box" size={36} color="#007C5B" />,
      title: "Produk atau Jasa",
      onPress: () => navigation.push("ProdukTab"),
    },
    {
      icon: <Feather name="layers" size={36} color="#007C5B" />,
      title: "Kategori Produk",
      onPress: () => navigation.push("CategoryTab"),
    },
    {
      icon: (
        <MaterialCommunityIcons name="cart-outline" size={36} color="#007C5B" />
      ),
      title: "Stok",
      onPress: () => navigation.push("StockTab"),
    },
    {
      icon: (
        <MaterialCommunityIcons
          name="card-account-details-outline"
          size={32}
          color="#007C5B"
        />
      ),
      title: "Customer",
      onPress: () => navigation.push("CustomerTab"),
    },
  ];

  return (
    <Flex fill bg="white">
      <CustomBar
        title="Management"
        menu={true}
        navigation={navigation}
        centerTitle={true}
      />
      <FlatList
        keyExtractor={(item) => item.title}
        data={menus}
        renderItem={({ item }) => {
          return (
            <ListItem
              leading={item.icon}
              title={<Text style={{ fontWeight: "500" }}>{item.title}</Text>}
              onPress={item.onPress}
              leadingMode={"avatar"}
            />
          );
        }}
      />
    </Flex>
  );
};

export default Navigation;
