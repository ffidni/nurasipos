import { Flex, VStack } from "@react-native-material/core";
import React from "react";
import { Modal } from "react-native";

const CustomModal = ({ children, dialog }) => {
  return (
    <Modal visible={dialog} transparent={true}>
      <Flex bg={"rgba(0, 0, 0, 0.3)"} fill items="center" justify="center">
        <VStack bg="white" justify="center" w="85%">
          {children}
        </VStack>
      </Flex>
    </Modal>
  );
};

export default CustomModal;
