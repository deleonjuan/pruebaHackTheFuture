import { Box } from "react-native-design-utility";
import { ActivityIndicator, Alert } from "react-native";
import { useEffect } from "react";

const LoadingContainer = ({ isLoading, children, isError, error }) => {

    useEffect(() => {
        if(isError) Alert.alert(`error ${error.status}`, error.data.message)
    }, [isError])

  return (
    <>
      {isLoading ? (
        <Box f={1} center>
          <ActivityIndicator size="large" />
        </Box>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingContainer;
