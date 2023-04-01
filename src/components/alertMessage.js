import { StyleSheet } from "react-native";
import { Box, Text } from "react-native-design-utility";

const AlertMessage = ({message}) => {
  return (
    <Box style={styles.alertContainer}>
      <Text color="#663c00">{message}</Text>
    </Box>
  );
};

export default AlertMessage;

const styles = StyleSheet.create({
  alertContainer: {
    width: '100%',
    backgroundColor: '#fff4e5',
    borderRadius: 10,
    padding: 8,
    marginVertical: 12
  }
});
