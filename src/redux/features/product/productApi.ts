import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (productInfo) => ({
        url: "/products/create-product",
        method: "POST",
        body: productInfo,
      }),
    }),
    getProducts: builder.query({
      query: () => ({
        url: "/products?isDeleted=false",
        method: "GET",
      }),
    }),
    // getProductsByPriceRange: builder.query({
    //   query: () => ({
    //     url: "/products?sort=price",
    //     method: "GET",
    //   }),
    // }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useGetProductsByPriceRangeQuery,
  useDeleteProductMutation,
} = productApi;
