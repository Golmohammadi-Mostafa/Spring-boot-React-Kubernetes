import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const helloApiHeaders = {}
const baseUrl = 'http://localhost:8080';

const createRequest = (url) => ({url, headers: helloApiHeaders});

export const helloApi = createApi({
    reducerPath: 'helloApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getHello: builder.query({
            query: () => createRequest(`/printHello`)
        }),
    })
})
export const { useGetHelloQuery } = helloApi;