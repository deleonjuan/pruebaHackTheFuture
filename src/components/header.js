import { StyleSheet } from "react-native";
import { Box } from "react-native-design-utility";

const CustomHeader = ({ rightSide, center, leftSide }) => {
  return (
    <Box
      h="6%"
      dir="row"
      justify="between"
      align="center"
      px={12}
      style={styles.header}
    >
      {leftSide}
      {center}
      {rightSide}
    </Box>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
});
