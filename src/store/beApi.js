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
        body: JSON.stringify(body),
      }),
    }),
    loginIn: builder.mutation({
      query: (body) => ({
        headers: { "Content-Type": "application/json" },
        method: "post",
        url: apiConstants.auth.loginIn,
        body: JSON.stringify(body)
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
        method: "post",
        url: apiConstants.products.createProduct,
        body: JSON.stringify(body),
      }),
    }),
    addProductToCart: builder.mutation({
      query: (body) => ({
        headers,
        method: "post",
        url: apiConstants.products.addProductToCart,
        body: JSON.stringify(body),
      }),
    }),
    getReservations: builder.mutation({
      query: (params) => ({
        headers,
        url: apiConstants.todos.getAll,
        params,
      }),
    }),
    updateReservations: builder.mutation({
      query: (todoId, body) => ({
        headers,
        method: "put",
        url: `${apiConstants.todos.update}${todoId}`,
        body: JSON.stringify(body),
      }),
    }),
    removeReservations: builder.mutation({
      query: (todoId) => ({
        headers,
        method: "delete",
        url: `${apiConstants.todos.remove}${todoId}`,
      }),
    }),
    addReservation: builder.mutation({
      query: (body) => ({
        headers,
        method: "post",
        url: apiConstants.todos.addNewOne,
        body: JSON.stringify(body),
      }),
    }),
    getShoppingCart: builder.query({
      query: (todoId) => ({
        headers,
        url: `${apiConstants.cart.getCart}${todoId}`,
      }),
    }),
    removeShoppingCart: builder.mutation({
      query: (todoId) => ({
        headers,
        method: "delete",
        url: `${apiConstants.cart.removeCart}${todoId}`,
      }),
    }),
  }),
});

const {
  useAddReservationMutation,
  useGetShoppingCartQuery,
  useRemoveShoppingCartMutation,
  useCreateNewUserMutation,
  useLoginInMutation,
  useGetProductListQuery,
  useGetProductQuery,
  useAddProductToCartMutation,
  useCreateProductMutation,
  useGetReservationsMutation,
  useUpdateReservationsMutation,
  useRemoveReservationsMutation,
} = beApi;

export const beEndpoints = {
  useAddReservationMutation,
  useGetShoppingCartQuery,
  useRemoveShoppingCartMutation,
  useCreateNewUserMutation,
  useLoginInMutation,
  useGetProductListQuery,
  useGetProductQuery,
  useAddProductToCartMutation,
  useCreateProductMutation,
  useGetReservationsMutation,
  useUpdateReservationsMutation,
  useRemoveReservationsMutation,
};
