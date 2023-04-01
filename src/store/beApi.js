import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiConstants, { headers } from "./constanst";

export const beApi = createApi({
  reducerPath: "beApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    createNewUser: builder.mutation({
      query: (body) => ({
        headers,
        method: "post",
        url: apiConstants.auth.addNew,
        body,
      }),
    }),
    loginIn: builder.mutation({
      query: (body) => ({
        headers,
        method: "post",
        url: apiConstants.auth.loginIn,
        body: JSON.stringify({
          username: "atuny0",
          password: "9uQFF1Lh",
        }),
      }),
    }),
    getProductList: builder.query({
      query: (params) => ({
        url: apiConstants.products.getAll,
        params,
      }),
    }),
    getProduct: builder.query({
      query: (productId) => ({
        url: `${apiConstants.products.retrieve}${productId}`,
      }),
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        headers,
        method: 'post',
        url: apiConstants.products.createProduct,
        body: JSON.stringify(body)
      }),
    }),
    addProductToCart: builder.mutation({
      query: (body) => ({
        headers,
        method: 'post',
        url: apiConstants.products.addProductToCart,
        body: JSON.stringify(body)
      }),
    }),
  }),
});

const {
  useCreateNewUserMutation,
  useLoginInMutation,
  useGetProductListQuery,
  useGetProductQuery,
  useAddProductToCartMutation,
  useCreateProductMutation
} = beApi;

export const beEndpoints = {
  useCreateNewUserMutation,
  useLoginInMutation,
  useGetProductListQuery,
  useGetProductQuery,
  useAddProductToCartMutation,
  useCreateProductMutation
};
