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
      query: (filter) => {
        const { priceRange, search } = filter;

        const params = new URLSearchParams();

        params.append("isDeleted", "false");

        priceRange && params.append("sort", priceRange);
        search && params.append("searchTerm", search);

        return {
          url: `/products`,
          method: "GET",
          params: params,
        };
      },
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
  // useGetProductsByPriceRangeQuery,
  useDeleteProductMutation,
} = productApi;
