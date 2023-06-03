import cartItems from "@/app/redux/reduxToolKit/components/dummyData";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isloading: false,
};

type initstateType = typeof initialState;

export const getCartItems = createAsyncThunk(
  "cart/createCartItems",
  async (data, thunkAPI) => {
    // return fetch(url).then((res) => res.json().catch((err) => err));
    // console.log(thunkAPI);
    try {
      const res = await axios(url);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      // return { ...state, cartItems: [] }; // we can return like old redux but it will replace the state
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId) || {
        amount: 0,
      };
      cartItem.amount = cartItem?.amount + 1;
    },
    decrease: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId) || {
        amount: 0,
      };
      cartItem.amount = cartItem?.amount - 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems?.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      return {
        ...state,
        amount,
        total,
      };
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state: initstateType) => {
      state.isloading = true;
    },
    [getCartItems.fulfilled]: (state: initstateType, action: any) => {
      state.isloading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state: initstateType) => {
      state.cartItems = [];
      state.isloading = false;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
