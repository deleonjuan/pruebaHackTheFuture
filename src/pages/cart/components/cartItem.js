import { StyleSheet, StatusBar } from "react-native";
import { Box, Text } from "react-native-design-utility";
import GenericCard from "../../../components/genericCard";

const CartItem = ({ cartItem }) => {
  return (
    <GenericCard
      title={<Text fontWeight="bold">{cartItem.title}</Text>}
      body={
        <>
          <Text>descuento: ${cartItem.discountPercentage}</Text>
          <Text>precio final: ${cartItem.price}</Text>
        </>
      }
    />
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
