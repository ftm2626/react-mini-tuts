import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type productsT = {
  products: {
    id: number;
    title: string;
  }[];
};

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<productsT, string>({
      query: () => "products",
      providesTags: [{ type: "products", id: "list" }],
    }),
    getProduct: builder.query<productsT, string>({
      query: (product) => `products/search?q=${product}`,
    }),
    addProducts: builder.mutation({
      query: (body) => {
        return {
          url: "products/add",
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: [{ type: "products", id: "list" }],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useLazyGetProductQuery,
  useAddProductsMutation,
} = productApi;
