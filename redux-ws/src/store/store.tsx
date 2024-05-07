import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import registerSlice from "./slice/registerSlice";
import PokemonService from "../services/PokemonService";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    register: registerSlice,
    [PokemonService.reducerPath]: PokemonService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PokemonService.middleware),
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
