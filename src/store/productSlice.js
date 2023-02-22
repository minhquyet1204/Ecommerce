import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isOpenSidebar: false,
};

export const productSlice = createSlice({
  name: "ecommerce",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
    closeSidebar: (state, action) => {
      state.isOpenSidebar = action.payload;
    },
    addProduct: (state, action) => {
      const product = action.payload;
      const itemIndex = state.products.findIndex(
        (item) => item.id === product.id
      );

      if (itemIndex === -1) {
        state.products = [...state.products, product];
      } else {
        const existingCartItem = state.products[itemIndex];
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };
        state.products[itemIndex] = updatedItem;
      }
    },

    removeProduct: (state, action) => {
      const filterProduct = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.products = filterProduct;
    },

    clearProduct: (state) => {
      state.products = [];
    },

    increaseAmount: (state, action) => {
      const product = action.payload;
      const itemIndex = state.products.findIndex(
        (item) => item.id === product.id
      );
      const newItem = state.products[itemIndex];
      state.products[itemIndex] = {
        ...newItem,
        amount: newItem.amount + 1,
      };
    },

    decreaseAmount: (state, action) => {
      const product = action.payload;
      const itemIndex = state.products.findIndex(
        (item) => item.id === product.id
      );
      const newItem = state.products[itemIndex];
      if (newItem.amount < 2) {
        state.products.splice(itemIndex, 1);
      } else {
        state.products[itemIndex] = {
          ...newItem,
          amount: newItem.amount - 1,
        };
      }
    },
  },
});

export const {
  addProduct,
  toggleSidebar,
  closeSidebar,
  removeProduct,
  clearProduct,
  increaseAmount,
  decreaseAmount,
} = productSlice.actions;

export default productSlice.reducer;
