import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (productInfo) => ({
        url: "/products/create-product",
        method: "POST",
        body: productInfo,
      }),
      invalidatesTags: ["product,cart"],
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
      providesTags: ["product,cart"],
    }),

    getProductsByQuantity: builder.query({
      query: () => ({
        url: "/products?fields=quantity",
        method: "GET",
      }),
      providesTags: ["product,cart"],
    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product,cart"],
    }),

    updateProduct: builder.mutation({
      query: (updateInfo) => {
        const { id, payload } = updateInfo;
        console.log(updateInfo);
        return {
          url: `/products/${id}`,
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["product,cart"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product,cart"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useGetProductsByQuantityQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
