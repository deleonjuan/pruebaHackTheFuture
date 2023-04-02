import { Formik } from "formik";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Text } from "react-native-design-utility";
import { StyleSheet, SafeAreaView, StatusBar, Pressable } from "react-native";

import { beEndpoints } from "../../store/beApi";
import { actions } from "../../store/slices/auth";
import AuthButton from "../../components/authButton";
import CustomTextInput from "../../components/TextInput";
import LoadingContainer from "../../components/loadingContainer";
import { defaultUser } from "../../utils/constants";

const SingInPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const [backupUser, setDefaultUser] = useState({});
  const [loginIn, { data, isLoading, isError, error }] =
    beEndpoints.useLoginInMutation();

  const defaultValues = {
    username: "",
    password: "",
  };

  const goToRegister = () => {
    navigation.navigate("sign-up");
  };

  const onSubmitHandler = (values) => {
    setDefaultUser(defaultUser);
    loginIn(values);
  };

  useEffect(() => {
    if (!isEmpty(data)) dispatch(actions.onLogin(data));
    if (isEmpty(data) && !isEmpty(backupUser))
      dispatch(actions.onLogin(backupUser));
  }, [data, backupUser]);

  return (
    <LoadingContainer isLoading={isLoading} isError={isError} error={error}>
      <SafeAreaView style={styles.container}>
        <Box f={1} center marginHorizontal={40}>
          <Box>
            <Text size={40} marginBottom={18} fontWeight="bold">
              Iniciar sesion
            </Text>

            <Formik initialValues={defaultValues} onSubmit={onSubmitHandler}>
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <>
                  <CustomTextInput
                    placeholder="Usuario"
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    value={values.username}
                  />
                  <CustomTextInput
                    placeholder="contrasenia"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />

                  <Box dir="row" justify="between">
                    <Box center>
                      <Pressable itSlop={24} onPress={goToRegister}>
                        <Text color="blue">registrarme</Text>
                      </Pressable>
                    </Box>
                    <AuthButton onPress={handleSubmit} />
                  </Box>
                </>
              )}
            </Formik>
          </Box>
        </Box>
      </SafeAreaView>
    </LoadingContainer>
  );
};

export default SingInPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
});
