import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "../features/movieApi";



export const store = configureStore({
  reducer: {
    [movieSlice.reducerPath]: movieSlice.reducer


  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      movieSlice.middleware
    ])

  }

})
