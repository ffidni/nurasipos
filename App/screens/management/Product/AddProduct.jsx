import {
  Box,
  Chip,
  Flex,
  HStack,
  Selector,
  Switch,
  TextInput,
  VStack,
  Text,
  IconButton,
  Pressable,
  Button,
} from "@react-native-material/core";
import React, { useState } from "react";
import CustomBar from "../../../components/CustomBar";
import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import DropDownPicker from "react-native-dropdown-picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ScrollView } from "react-native-gesture-handler";
import DefaultImage from "../../../components/DefaultImage";
import Scrollable from "../../../components/Scrollable";

const AddProduct = ({ navigation }) => {
  const [useStock, setUseStock] = useState(false);
  const [showTransaction, setShowTransaction] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([
    { label: "Foods", value: { categoryId: 1 } },
  ]);
  const [more, setMore] = useState(false);

  return (
    <>
      <CustomBar title="Tambah Produk" navigation={navigation} />
      <Scrollable>
        <Flex fill bg="white" pt={30}>
          <VStack items="center">
            <DefaultImage p={10} iconSize={56} />
            <Chip
              label="Upload"
              style={{ backgroundColor: "#007C5B", marginTop: 15 }}
              color="white"
            />
          </VStack>

          <VStack mh={30} mt={20} spacing={10}>
            <VStack>
              <TextInput
                variant="standard"
                placeholder="Nama"
                color="#007C5B"
              />
            </VStack>
            <HStack justify="between">
              <BouncyCheckbox
                fillColor="#007C5B"
                text="Gunakan Stok"
                textStyle={{ textDecorationLine: "none" }}
                innerIconStyle={{
                  borderRadius: 0,
                }}
                iconStyle={{ borderRadius: 0 }}
                onPress={() => setUseStock(!useStock)}
              />
              <BouncyCheckbox
                fillColor="#007C5B"
                text="Tampilkan di Transaksi"
                textStyle={{ textDecorationLine: "none" }}
                innerIconStyle={{
                  borderRadius: 0,
                }}
                iconStyle={{ borderRadius: 0 }}
                onPress={() => setShowTransaction(!showTransaction)}
              />
            </HStack>
            <HStack spacing={30}>
              <TextInput
                variant="standard"
                placeholder="Stok"
                color="#007C5B"
                style={{ flex: 1 }}
              />
              <TextInput
                variant="standard"
                placeholder="Kode"
                color="#007C5B"
                style={{ flex: 1 }}
              />
            </HStack>
            <HStack spacing={30}>
              <TextInput
                variant="standard"
                placeholder="Harga Awal"
                color="#007C5B"
                style={{ flex: 1 }}
              />
              <TextInput
                variant="standard"
                placeholder="Harga Jual"
                color="#007C5B"
                style={{ flex: 1 }}
              />
            </HStack>
            <HStack items="center">
              <DropDownPicker
                containerStyle={{ flex: 1 }}
                style={{ borderColor: "#007C5B" }}
                placeholder="Pilih Kategori"
                items={categories}
                open={showDrop}
                setOpen={setShowDrop}
                value={category}
                setValue={setCategory}
              />
              <IconButton
                icon={<AntDesign name="plus" size={24} color="#007C5B" />}
              />
            </HStack>
            {!more && (
              <Pressable onPress={() => setMore(true)}>
                <HStack items="center">
                  <Text color="#007C5B">Lainnya</Text>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={32}
                    color="#007C5B"
                  />
                </HStack>
              </Pressable>
            )}
            {more && (
              <>
                <HStack spacing={30}>
                  <TextInput
                    variant="standard"
                    placeholder="Berat"
                    color="#007C5B"
                    style={{ flex: 1 }}
                  />
                  <TextInput
                    variant="standard"
                    placeholder="Satuan (gram, pcs)"
                    color="#007C5B"
                    style={{ flex: 1 }}
                  />
                </HStack>
                <HStack spacing={30}>
                  <TextInput
                    variant="standard"
                    placeholder="Diskon (%)"
                    color="#007C5B"
                    style={{ flex: 1 }}
                  />
                  <TextInput
                    variant="standard"
                    placeholder="Lokasi Rak"
                    color="#007C5B"
                    style={{ flex: 1 }}
                  />
                </HStack>
                <VStack>
                  <TextInput
                    variant="standard"
                    placeholder="Informasi"
                    color="#007C5B"
                  />
                </VStack>
                <Pressable
                  onPress={() => setMore(false)}
                  style={{ marginTop: 10 }}
                >
                  <HStack items="center">
                    <Text color="#007C5B">Lainnya</Text>
                    <MaterialIcons
                      name="keyboard-arrow-up"
                      size={32}
                      color="#007C5B"
                    />
                  </HStack>
                </Pressable>
              </>
            )}

            <Button
              title="Simpan"
              color="#007C5B"
              style={{ marginVertical: 20 }}
            />
          </VStack>
        </Flex>
      </Scrollable>
    </>
  );
};

export default AddProduct;
