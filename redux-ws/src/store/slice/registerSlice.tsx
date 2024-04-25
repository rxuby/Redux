import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type registerSlice = {
  username: string;
  email: string;
  password: string;
};

const initialValues: registerSlice = {
  username: "",
  email: "",
  password: "",
};

export const registerSlice = createSlice({
  name: "register",
  initialState: initialValues,
  reducers: {
    addFormRegister: (state, action: PayloadAction<registerSlice>) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    clearFormRegister(state) {
      // state.value = initialValues()
      (state.email = ""), (state.password = ""), (state.username = "");
      // state = initialValues;
    },
  },
});

export const { addFormRegister, clearFormRegister } = registerSlice.actions;
export default registerSlice.reducer;
