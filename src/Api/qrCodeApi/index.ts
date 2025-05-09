import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const qrCodeApi = createApi({
    reducerPath: 'qrCodeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        postQrCode: builder.mutation({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            query: (newQrCode: any) => ({
                url: 'qrCode',
                method: 'POST',
                body: newQrCode,
            }),
        })
    }),
});

export default qrCodeApi;