import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, credential } from '../app/apis_cre';





export const movieSlice = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    headers: {
      Authorization: credential

    }
  }),

  endpoints: (builder) => ({

    categoryMovie: builder.query({
      query: (query) => ({
        url: '/movie/popular',

        method: 'GET'

      })

    }),

    searchMovie: builder.query({
      query: () => ({

      })

    }),


  })

});

export const { useCategoryMovieQuery } = movieSlice;