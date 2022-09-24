import { AppBar, HStack, Text } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CustomBar({
  menu,
  disableLeading,
  navigation,
  trailing,
  title,
  centerTitle,
  style,
  inverted,
  removeShadow,
}) {
  return (
    <AppBar
      elevation={removeShadow ? 0 : 4}
      leading={
        disableLeading
          ? null
          : () =>
              menu ? (
                <MaterialCommunityIcons
                  name="menu"
                  size={28}
                  style={{
                    marginLeft: 10,
                    color: inverted ? "white" : "#007C5B",
                  }}
                  onPress={navigation.toggleDrawer}
                />
              ) : (
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={28}
                  style={{
                    marginLeft: 10,
                    color: inverted ? "white" : "#007C5B",
                  }}
                  onPress={navigation.goBack}
                />
              )
      }
      color={inverted ? "#007C5B" : "white"}
      title={title}
      titleStyle={[{ color: inverted ? "white" : "#007C5B" }, style]}
      centerTitle={centerTitle}
      trailing={trailing}
    />
  );
}
