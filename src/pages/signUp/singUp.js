import { Formik } from "formik";
import { isEmpty } from "lodash";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Text } from "react-native-design-utility";
import { StyleSheet, SafeAreaView, StatusBar, Pressable } from "react-native";

import { beEndpoints } from "../../store/beApi";
import { actions } from "../../store/slices/auth";
import AuthButton from "../../components/authButton";
import CustomTextInput from "../../components/TextInput";
import LoadingContainer from "../../components/loadingContainer";

const SingUpPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const [createNewUser, { data, isLoading, isError, error }] =
    beEndpoints.useCreateNewUserMutation();
  const [loginIn, { data: userData }] = beEndpoints.useLoginInMutation();

  const defaultValues = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    username: "",
    password: "",
    gender: "",
  };
  const onSubmitHandler = (values) => {
    createNewUser(values);
  };
  const goToLogin = () => {
    navigation.navigate("sign-in");
  };
  useEffect(() => {
    if(!isEmpty(data)) loginIn(data);
  }, [data]);

  useEffect(() => {
    if (!isEmpty(userData)) dispatch(actions.onLogin(userData));
    console.log("🚀 ~ file: singUp.js:41 ~ useEffect ~ userData:", userData)
  }, [userData]);
  
  return (
    <LoadingContainer isLoading={isLoading} isError={isError} error={error}>
      <SafeAreaView style={styles.container}>
        <Box f={1} center marginHorizontal={40}>
          <Box>
            <Text size={40} marginBottom={18} fontWeight="bold">
              Registro
            </Text>

            <Formik initialValues={defaultValues} onSubmit={onSubmitHandler}>
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <>
                  <CustomTextInput
                    placeholder="Nombre"
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                    value={values.firstName}
                  />
                  <CustomTextInput
                    placeholder="Apellido"
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                    value={values.lastName}
                  />
                  <CustomTextInput
                    placeholder="Edad"
                    keyboardType="numeric"
                    onChangeText={handleChange("age")}
                    onBlur={handleBlur("age")}
                    value={values.age}
                  />
                  <CustomTextInput
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                  <CustomTextInput
                    placeholder="Nombre de usuario"
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
                  <CustomTextInput
                    placeholder="genero"
                    onChangeText={handleChange("gender")}
                    onBlur={handleBlur("gender")}
                    value={values.gender}
                  />
                  <Box dir="row" justify="between">
                    <Box center>
                      <Pressable itSlop={24} onPress={goToLogin}>
                        <Text color="blue">Inciar sesion</Text>
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

export default SingUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
});
