import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Box, Text } from "react-native-design-utility";

const ExitButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress} hitSlop={24} style={styles.exitButtonPressable}>
      <Text>salir</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  exitButtonPressable: {
    marginHorizontal: 16,
    marginTop: 8,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderColor: "#cecece",
    borderWidth: 1,
  },
});

export default ExitButton;
