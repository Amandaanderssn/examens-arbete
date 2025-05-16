// Using rtk query to fetch drink data
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DrinksApiResponse, UserApiResponse } from './types';
import { SignUpFormValues } from '../../common/Components/SignUpFormComponent/types';

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        getAllDrinks: builder.query<DrinksApiResponse[], void>({
            query: () => 'drinks',
        }),
        getAllUsers: builder.query<UserApiResponse[], void>({
            query: () => 'users',
        }),
        postUser: builder.mutation<UserApiResponse, SignUpFormValues>({
            query: (newUser) => ({
                url: 'users',
                method: 'POST',
                body: newUser,
            }),
        })
    }),
});

export default api