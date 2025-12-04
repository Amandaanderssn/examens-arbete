// Using rtk query to fetch drink data
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DrinksApiResponse, FoodApiResponse, UserApiResponse, ApiResponseWrapper } from './types';
import { SignUpFormValues } from '../../common/Components/SignUpFormComponent/types';

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `/` }),
    endpoints: (builder) => ({
        getAllDrinks: builder.query<DrinksApiResponse[], void>({
            query: () => 'db.json',
            transformResponse: (response: ApiResponseWrapper) => response.drinks
        }),
        getAllFood: builder.query<FoodApiResponse[], void>({
            query: () => 'db.json',
            transformResponse: (response: ApiResponseWrapper) => response.food
        }),
        getAllUsers: builder.query<UserApiResponse[], void>({
            query: () => 'db.json',
            transformResponse: (response: ApiResponseWrapper) => response.users
        }),
        postUser: builder.mutation<UserApiResponse, SignUpFormValues>({
            query: (newUser) => ({
                url: 'users',
                method: 'POST', // <- fungerar ej på Netlify, men lämnas för lokal dev
                body: newUser,
            }),
        }),
        deleteUser: builder.mutation<UserApiResponse, number | undefined>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE', // <- fungerar ej på Netlify, men lämnas för lokal dev
            })
        })
    }),
});

export default api