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
      invalidatesTags: ["product,cart"],
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
      providesTags: ["product,cart"],
    }),

    getOneCart: builder.query({
      query: (id) => {
        return {
          url: `/carts`,
          method: "GET",
          params: id,
        };
      },
      providesTags: ["product,cart"],
    }),

    updateCart: builder.mutation({
      query: (updateInfo) => {
        const { id, payload } = updateInfo;
        return {
          url: `/carts/${id}`,
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["product,cart"],
    }),

    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product,cart"],
    }),

    placedOrder: builder.mutation({
      query: (order) => ({
        url: `/carts/${order}`,
        method: "POST",
      }),
      invalidatesTags: ["product,cart"],
    }),
  }),
});

export const {
  useCreateCartMutation,
  useGetAllCartsQuery,
  useGetOneCartQuery,
  useUpdateCartMutation,
  useDeleteCartMutation,
  usePlacedOrderMutation,
} = cartApi;
