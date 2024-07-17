import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCart: builder.mutation({
      query: (cartInfo) => {
        console.log(cartInfo);
        return {
          url: "/carts/add-to-cart",
          method: "POST",
          body: cartInfo,
        };
      },
    }),
    getAllCarts: builder.query({
      query: () => {
        const params = new URLSearchParams();

        params.append("isDeleted", "false");

        return {
          url: `/carts`,
          method: "GET",
          params: params,
        };
      },
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateCartMutation,
  useGetAllCartsQuery,
  useDeleteProductMutation,
} = cartApi;
