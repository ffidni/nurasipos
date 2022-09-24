import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "@react-native-material/core";
import React from "react";

const Search = ({ placeholder }) => {
  return (
    <TextInput
      leading={<MaterialIcons name="search" size={24} color="#007C5B" />}
      variant="outline"
      placeholder={placeholder}
      inputStyle={{ backgroundColor: "#EFF3F6", borderRadius: 8 }}
      style={{
        backgroundColor: "#EFF3F6",
        borderRadius: 8,
        flex: 1,
        marginLeft: 10,
      }}
    />
  );
};

export default Search;
