import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../features/player/playerSlice";
import { shazamCoreApi } from "../features/services/shazamCore";
export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
