import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const qrCodeApi = createApi({
    reducerPath: 'qrCodeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http(s)://api.qrserver.com/v1/create-qr-code/' }),
    endpoints: (builder) => ({
        postQrCode: builder.mutation({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            query: (newQrCode: any) => ({
                url: '?data=[URL-encoded-text]&size=[pixels]x[pixels]',
                method: 'POST',
                body: newQrCode,
            }),
        })
    }),
});

export default qrCodeApi;