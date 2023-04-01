import { ActivityIndicator, Pressable, StyleSheet } from "react-native";
import { Text, Box } from "react-native-design-utility";

const AddToCartButton = ({ finalPrize = "00", onPress, isLoading }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Box center>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text
            fontWeight="bold"
            color="white"
            size="lg"
          >{`Reservar ya $${finalPrize}!`}</Text>
        )}
      </Box>
    </Pressable>
  );
};

export default AddToCartButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 8,
    marginTop: 40,
  },
});
