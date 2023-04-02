import { StyleSheet } from "react-native";
import { Box } from "react-native-design-utility";

const GenericCard = ({ title, body }) => {
  return (
    <Box bg="#eaeaea" my={6} mx={8} radius="xs" style={styles.card}>
      <Box style={styles.headerCard}>{title}</Box>
      <Box p={16}>
        {body}
      </Box>
    </Box>
  );
};

export default GenericCard;

const styles = StyleSheet.create({
    headerCard: {
        borderBottomWidth: 1,
        borderColor: "#ddd",
        paddingHorizontal: 16,
        paddingVertical: 5,
      },
      card: {
        borderWidth: 1,
        borderColor: "#ddd",
      },
});
