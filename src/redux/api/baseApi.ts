import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:5000/api/v1", //! Local Server
  baseUrl: "https://kbd-clicks-server.vercel.app/api/v1", //? Vercel Server
  credentials: "include",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["product,cart"],
  endpoints: () => ({}),
});
