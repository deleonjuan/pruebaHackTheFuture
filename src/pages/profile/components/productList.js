import { ScrollView, StyleSheet } from "react-native";
import { Box, Text } from "react-native-design-utility";

const ProductList = () => {
    return(
        <ScrollView style={styles.scrollView}>
        <Text>data here</Text>
      </ScrollView>  
    )
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: 'pink',
    },
  });

export default ProductList 