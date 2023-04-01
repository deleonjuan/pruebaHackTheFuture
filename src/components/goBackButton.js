import { Pressable, StyleSheet } from "react-native";
import { Text } from "react-native-design-utility";

const GoBackButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress} itSlop={24}>
      <Text color="blue">Atras</Text>
    </Pressable>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({});
