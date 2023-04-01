import { Text, Box } from "react-native-design-utility";

const PriceDetails = ({label = "", value = "00"}) => {
  return (
    <Box dir="row" align="end">
      <Text>{label}:</Text>
      <Text mx={10} fontWeight="bold" size={24}>
        ${value}
      </Text>
    </Box>
  );
};

export default PriceDetails;
