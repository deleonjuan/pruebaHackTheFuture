import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import { Box, Text } from "react-native-design-utility";
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
        <Box
          h="6%"
          dir="row"
          justify="between"
          align="center"
          px={12}
          style={styles.header}
        >
          <Text size={30} fontWeight="bold">
            Feed
          </Text>
        </Box>
        <FlatList
          style={{ marginHorizontal: 5 }}
          columnWrapperStyle={styles.row}
          data={data?.products || []}
          renderItem={({item}) => (
            <ProductTile
              product={item}
              onPress={onProductCardClicked}
            />
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
  header: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
});
