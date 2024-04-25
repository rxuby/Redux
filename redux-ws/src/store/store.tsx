import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import registerSlice from "./slice/registerSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    register: registerSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
