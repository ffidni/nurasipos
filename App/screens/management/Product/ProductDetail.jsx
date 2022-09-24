import React, { useState } from "react";
import CustomBar from "../../../components/CustomBar";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogHeader,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
  Wrap,
} from "@react-native-material/core";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import DefaultImage from "../../../components/DefaultImage";

const ProductDetail = ({ navigation }) => {
  const [product, setProduct] = useState({
    productId: 1,
    productName: "Pocari",
    code: "000",
    stock: 1,
    basicPrice: 8000,
    sellingPrice: 10000,
    discount: 0,
  });
  const [dialog, setDialog] = useState(false);

  return (
    <>
      <Dialog visible={dialog} onDismiss={() => setDialog(false)}>
        <Text
          variant="h5"
          style={{ textAlign: "center", marginVertical: 10 }}
          color="#007C5B"
        >
          KONFIRMASI
        </Text>
        <DialogContent>
          <VStack items="center">
            <MaterialCommunityIcons
              name="delete-outline"
              size={72}
              color="red"
            />
            <Text>Apakah kamu yakin?</Text>
          </VStack>
        </DialogContent>
        <HStack
          divider={true}
          style={{ borderTopWidth: 1, borderColor: "gray" }}
          dividerStyle={{ backgroundColor: "gray" }}
        >
          <Button
            style={{ flex: 1, borderColor: "#007C5B", borderRadius: 0 }}
            title="Tidak"
            variant="text"
            compact
            color="#007C5B"
            onPress={() => setDialog(false)}
          />
          <Button
            style={{ flex: 1, borderColor: "#007C5B" }}
            title="Iya"
            variant="text"
            compact
            color="#007C5B"
            onPress={() => {}}
          />
        </HStack>
      </Dialog>
      <CustomBar
        navigation={navigation}
        inverted={true}
        trailing={
          <HStack spacing={20}>
            <MaterialCommunityIcons
              name="pencil-outline"
              color="white"
              size={30}
            />
            <MaterialCommunityIcons
              name="cart-outline"
              size={30}
              color="white"
            />
            <MaterialCommunityIcons
              name="delete-outline"
              size={30}
              color="white"
              onPress={() => setDialog(true)}
            />
          </HStack>
        }
      />
      <Flex fill bg="white" ph={20} pv={25}>
        <Wrap justify="start">
          <DefaultImage p={20} iconSize={56} disableUpload={true} />
        </Wrap>
        <VStack mt={10} spacing={40} w={"60%"}>
          <VStack>
            <Text variant="h5">{product.productName}</Text>
            <Text>Selling Price {product.sellingPrice}</Text>
            <Text>Diskon {product.discount}%</Text>
          </VStack>
          <HStack justify="between">
            <VStack>
              <Text>Kode</Text>
              <Text style={{ fontWeight: "500" }}>{product.code}</Text>
            </VStack>
            <VStack>
              <Text>Stok</Text>
              <Text style={{ fontWeight: "500" }}>{product.stock}</Text>
            </VStack>
          </HStack>
          <HStack justify="between">
            <VStack>
              <Text>Kategori</Text>
              <Text style={{ fontWeight: "500" }}>
                {product.category && ""}
              </Text>
            </VStack>
            <VStack>
              <Text>Penempatan Rak</Text>
              <Text style={{ fontWeight: "500" }}>
                {product.rackPlacement && ""}
              </Text>
            </VStack>
          </HStack>
        </VStack>
        <VStack mt={70}>
          <Button
            title="Detail Stok"
            variant="outlined"
            contentContainerStyle={{
              justifyContent: "space-between",
              backgroundColor: "white",
              borderWidth: 2,
              borderColor: "#007C5B",
              borderRadius: 8,
            }}
            pressEffectColor="lightgreen"
            titleStyle={{ color: "#007C5B" }}
            trailing={
              <MaterialIcons
                name="keyboard-arrow-right"
                color="#007C5B"
                size={24}
              />
            }
          />
        </VStack>
      </Flex>
    </>
  );
};

export default ProductDetail;
