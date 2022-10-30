import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "20e59a1fbamshe3ccadeeeb636fcp1cea81jsn0fe0a70fe059"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    getTrackDetail: builder.query({
      query: ({ songId }) => `/tracks/details?track_id=${songId}`,
    }),
    getRelatedSongs: builder.query({
      query: ({ songId }) => `/tracks/related?track_id=${songId}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetTrackDetailQuery,
  useGetRelatedSongsQuery,
} = shazamCoreApi;
