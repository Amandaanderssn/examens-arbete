// Using rtk query to fetch drink data
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DrinksApiResponse, FoodApiResponse, UserApiResponse } from './types';
import { SignUpFormValues } from '../../common/Components/SignUpFormComponent/types';

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3001/` }),
    endpoints: (builder) => ({
        getAllDrinks: builder.query<DrinksApiResponse[], void>({
            query: () => 'drinks',
        }),
        getAllFood: builder.query<FoodApiResponse[], void>({
            query: () => 'food',
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
        }),
        deleteUser: builder.mutation<UserApiResponse, number | undefined>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
            })
        })
    }),
});

export default api