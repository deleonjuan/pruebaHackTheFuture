import { SafeAreaView, StyleSheet, StatusBar, FlatList, Alert } from "react-native";
import LoadingContainer from "../../components/loadingContainer";
import { beEndpoints } from "../../store/beApi";
import { useSelector } from "react-redux";
import CartItem from "./components/cartItem";
import { Text } from "react-native-design-utility";
import { useEffect } from "react";
import CustomHeader from "../../components/header";
import ButtonTransparent from "../../components/transparentButton";

const CartPage = () => {
  const { userInfo } = useSelector((state) => state.authReducer);
  const {
    data: cartItems,
    isLoading,
    isError,
    error,
  } = beEndpoints.useGetShoppingCartQuery(userInfo.id);

  const [makeReservation] = beEndpoints.useAddReservationMutation();
  const [cleanShoppingCart] = beEndpoints.useRemoveShoppingCartMutation();

  const onOrderPress = () => {
    cartItems?.carts[0]?.products.forEach((product) => {
      makeReservation({
        todo: product.title,
        completed: false,
        userId: userInfo.id,
      });
    });
    cleanShoppingCart()
    Alert.alert('cleaned')
  };

  return (
    <LoadingContainer isLoading={isLoading}>
      <SafeAreaView style={styles.container}>
        <CustomHeader
          leftSide={
            <Text px={16} py={8} fontWeight="bold" size={24}>
              Mi carrito
            </Text>
          }
          rightSide={
            <ButtonTransparent text="ordenar" onPress={onOrderPress} />
          }
        />
        <FlatList
          data={cartItems?.carts[0]?.products || []}
          renderItem={({ item }) => <CartItem cartItem={item} />}
          keyExtractor={(reservation) => reservation.id}
        />
      </SafeAreaView>
    </LoadingContainer>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
