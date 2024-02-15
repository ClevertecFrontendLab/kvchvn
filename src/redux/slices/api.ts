import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const marathonApi = createApi({
    reducerPath: 'marathonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://marathon-api.clevertec.ru/' }),
    endpoints: (builder) => ({}),
});

export const {} = marathonApi;
