import { Pressable, StyleSheet } from "react-native";
import { Text, Box } from "react-native-design-utility";
import Icon from "react-native-vector-icons/Ionicons";

const AuthButton = ({ onPress, text = "Entrar"}) => {
  return (
    <Pressable onPress={onPress} style={styles.butttonPressable}>
      <Box dir="row" align="center" justify="center">
        <Text size="xl">{text}</Text>
        <Icon name="arrow-forward-outline" size={24} style={styles.icon}/>
      </Box>
    </Pressable>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  butttonPressable: {
    backgroundColor: "#eaeaea",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 50,
  },
  icon:{
    marginTop: 4,
    marginHorizontal: 4
  }
});
