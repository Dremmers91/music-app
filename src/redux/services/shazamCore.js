import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core7.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '19badb5145msh1c215326c7d3beep16ce3ajsn4edc4a6f6c07');
            // headers.set('X-RapidAPI-Host', 'shazam-core7.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopChart: builder.query({ query: () => '/charts/get-top-songs-in-world' }),
    }),
});

export const { useGetTopChartQuery } = shazamCoreApi;