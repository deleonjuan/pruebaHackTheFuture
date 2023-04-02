import { isEmpty } from "lodash";
import { useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { Text, Box } from "react-native-design-utility";
import AlertMessage from "../../components/alertMessage";
import GoBackButton from "../../components/goBackButton";
import LoadingContainer from "../../components/loadingContainer";
import { beEndpoints } from "../../store/beApi";
import AddToCartButton from "./components/addToCartButton";
import PriceDetails from "./components/priceDetails";
import { useSelector } from "react-redux";
import CustomHeader from "../../components/header";

const ProductDetailPage = ({ route, navigation }) => {
  const { userInfo } = useSelector((state) => state.authReducer);
  const { productId } = route.params;
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = beEndpoints.useGetProductQuery(productId);

  const [addToCart, { data: cartData, isLoading: isCartLoading }] =
    beEndpoints.useAddProductToCartMutation();

  const getPrice = () =>
    Math.round(product?.price + product?.discountPercentage);

  const onAddToCartPress = () => {
    addToCart({
      userId: userInfo.id,
      products: [
        {
          id: product.id,
          quantity: 1,
        },
      ],
    });
  };

  useEffect(() => {
    if (!isEmpty(cartData) && !isCartLoading)
      Alert.alert("Exito", "Elemento agregado al carrito");
  }, [cartData]);

  const Header = () => (
    <CustomHeader
      leftSide={<GoBackButton onPress={() => navigation.goBack()} />}
    />
  );

  const Information = () => (
    <ScrollView>
      <Box h="60%" px={12}>
        <Text fontWeight="bold" fontSize={32}>
          {product?.title}
        </Text>
        <Text color="blue" mb={10}>
          #handcraft
        </Text>
        <Text fontWeight="bold" fontSize={18}>
          Detalles:
        </Text>
        <Text>{product?.description}</Text>
        <AlertMessage message="ya solo queda 1" />
        <Box dir="col" align="end">
          <PriceDetails label="precio normal" value={getPrice()} />
          <PriceDetails label="descuento" value={product?.discountPercentage} />
        </Box>
        <AddToCartButton
          isLoading={isCartLoading}
          finalPrize={product.price}
          onPress={onAddToCartPress}
        />
      </Box>
    </ScrollView>
  );

  return (
    <LoadingContainer isLoading={isLoading}>
      <SafeAreaView style={styles.container}>
        <Box f={1}>
          <Header />
          <Box h="34%" bg="skyblue">
            <Image style={styles.image} source={{ uri: product?.images[0] }} />
          </Box>
          <Information />
        </Box>
      </SafeAreaView>
    </LoadingContainer>
  );
};

export default ProductDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
