import { TextInput } from "react-native";
import { Box, Text } from "react-native-design-utility";

const CustomTextInput = (props) => {
  return (
    <Box w="100%" px="sm" radius="sm" bg="#eaeaea" border={1} mb={18} dir="row" align="center" style={{borderColor: '#ddd'}}>
      <TextInput {...props} style={{ flex: 1, padding: 5 }} />
    </Box>
  );
};

export default CustomTextInput;
