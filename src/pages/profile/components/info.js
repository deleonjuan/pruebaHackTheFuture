import { StyleSheet } from "react-native";
import { Box, Text } from "react-native-design-utility";

const Info = ({label, value}) => {
  return (
    <Box dir="col" center>
        <Text size="lg" fontWeight="bold">{value}</Text>
        <Text>{label}</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  exitButtonPressable: {
    width: 50,
    backgroundColor: "skyblue",
  },
});

export default Info
