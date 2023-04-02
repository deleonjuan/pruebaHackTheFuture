import { StyleSheet, SafeAreaView, StatusBar, Alert } from "react-native";
import { Box, Text } from "react-native-design-utility";
import CustomTextInput from "../../components/TextInput";
import { Formik } from "formik";
import AuthButton from "../../components/authButton";
import { useEffect } from "react";
import LoadingContainer from "../../components/loadingContainer";
import { isEmpty } from "lodash";
import { beEndpoints } from "../../store/beApi";

const AddProductPage = () => {
  const [createProduct, { data, isLoading, isError, error }] =
    beEndpoints.useCreateProductMutation();

  const defaultValues = {
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    stock: "",
    category: "handcraft",
  };

  const onSubmitHandler = (newProductValues) => {
    createProduct(newProductValues);
  };

  useEffect(() => {
    if(!isEmpty(data)) Alert.alert('Exito', 'producto creado exitosamente')
  }, [data]);

  return (
    <LoadingContainer isLoading={isLoading} isError={isError} error={error}>
      <SafeAreaView style={styles.container}>
        <Box f={1} center marginHorizontal={40}>
          <Box>
            <Text size={40} marginBottom={18} fontWeight="bold">
              Nuevo Producto
            </Text>

            <Formik initialValues={defaultValues} onSubmit={onSubmitHandler}>
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <>
                  <CustomTextInput
                    placeholder="titulo"
                    onChangeText={handleChange("title")}
                    onBlur={handleBlur("title")}
                    value={values.title}
                  />
                  <CustomTextInput
                    placeholder="descripcion"
                    onChangeText={handleChange("description")}
                    onBlur={handleBlur("description")}
                    value={values.description}
                  />
                  <CustomTextInput
                    placeholder="precio"
                    keyboardType="numeric"
                    onChangeText={handleChange("price")}
                    onBlur={handleBlur("price")}
                    value={values.price}
                  />
                  <CustomTextInput
                    placeholder="descuento"
                    keyboardType="numeric"
                    onChangeText={handleChange("discountPercentage")}
                    onBlur={handleBlur("discountPercentage")}
                    value={values.discountPercentage}
                  />
                  <CustomTextInput
                    placeholder="stock"
                    onChangeText={handleChange("stock")}
                    onBlur={handleBlur("stock")}
                    value={values.stock}
                  />
                  <CustomTextInput
                    placeholder="categoria"
                    editable={false}
                    onChangeText={handleChange("category")}
                    onBlur={handleBlur("category")}
                    value={values.category}
                  />
                  <AuthButton onPress={handleSubmit} text="Crear" />
                </>
              )}
            </Formik>
          </Box>
        </Box>
      </SafeAreaView>
    </LoadingContainer>
  );
};

export default AddProductPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
});
