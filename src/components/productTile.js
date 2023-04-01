import { Image, Pressable, StyleSheet } from "react-native";
import { Box, Text } from "react-native-design-utility";
import { truncate } from "lodash";

const ProductTile = ({ product, onPress }) => {
  const getPrice = () => Math.round(product.price + product.discountPercentage);

  return (
    <Pressable
      onPress={() => onPress(product.id)}
      style={{ flex: 1 / 2, padding: 3 }}
    >
      <Box radius="xs" bg="#eaeaea">
        <Box center>
          <Image style={styles.image} source={{ uri: product.thumbnail }} />
        </Box>
        <Box px={8} py={6}>
          <Text mb={4} fontWeight="bold">
            {product.title}
          </Text>
          <Text>
            {truncate(product.description, { length: 50, separator: " " })}
          </Text>
          <Box dir="row" justify="end" mt={5}>
            <Text color="red" deco="through" mr={4}>
              ${getPrice()}
            </Text>
            <Text color="green">${product.price}</Text>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

export default ProductTile;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    borderRadius: 8,
  },
});
