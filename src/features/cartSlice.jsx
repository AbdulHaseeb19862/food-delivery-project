import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      let existItem = state.find((item) => item.id === action.payload.id);
      if (existItem) {
        return (state = state.map((item) =>
          item.id === action.payload.id
            ? { ...item, food_quantity: item.food_quantity + 1 }
            : item
        ));
      } else {
        state.push(action.payload);
      }
    },
    removeToCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    IncreementQty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, food_quantity: item.food_quantity + 1 }
          : item
      );
    },

    DecreementQty: (state, action) => {
      return (state = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, food_quantity: item.food_quantity - 1 }
          : item
      ));
    },
    clearCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeToCart,
  IncreementQty,
  DecreementQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
