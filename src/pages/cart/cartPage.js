import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Text } from "react-native-design-utility";
import LoadingContainer from "../../components/loadingContainer";

const CartPage = () => {
  return (
    <LoadingContainer>
      <SafeAreaView style={styles.container}>
        <Text>Hello</Text>
      </SafeAreaView>
    </LoadingContainer>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
});
