import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Box, Text } from "react-native-design-utility";
import ExitButton from "./components/exitButton";
import Info from "./components/info";
import ProductList from "./components/productList";

const ProfilePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Box f={1}>
        <Box h="30%" w="100%">
          <Box dir="row" justify="end">
            <ExitButton />
          </Box>
          <Box f={1} center>
            <Text fontWeight="bold" size={30}>
              Hello user!
            </Text>
          </Box>
          <Box dir="row" justify="around" paddingVertical={8}>
            <Info value="00" label="productos"/>
            <Info value="00" label="vendidos"/>
            <Info value="00" label="en reserva"/>
          </Box>
        </Box>
        <Box h="70%" w="100%">
          <ProductList/>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});