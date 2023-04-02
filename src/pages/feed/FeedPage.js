import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import { Box, Text } from "react-native-design-utility";
import CustomHeader from "../../components/header";
import LoadingContainer from "../../components/loadingContainer";
import ProductTile from "../../components/productTile";
import { beEndpoints } from "../../store/beApi";

const FeedPage = ({ navigation }) => {
  const { data, isLoading, isError, error } =
    beEndpoints.useGetProductListQuery();

  const onProductCardClicked = (productId) => {
    navigation.navigate("productDetail", {
      productId,
    });
  };

  return (
    <LoadingContainer isLoading={isLoading}>
      <SafeAreaView style={styles.container}>
        <CustomHeader
          leftSide={
            <Text size={30} fontWeight="bold">
              Feed
            </Text>
          }
        />
        <FlatList
          style={{ marginHorizontal: 5 }}
          columnWrapperStyle={styles.row}
          data={data?.products || []}
          renderItem={({ item }) => (
            <ProductTile product={item} onPress={onProductCardClicked} />
          )}
          keyExtractor={(product) => product.id}
          numColumns={2}
        />
      </SafeAreaView>
    </LoadingContainer>
  );
};

export default FeedPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
});
