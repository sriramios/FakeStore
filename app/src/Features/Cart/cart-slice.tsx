import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../Interfaces/Products';

interface CartState {
  map: Product[];
}
const initialState: CartState = {
  map: [],
};
const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const product = state.map.find(
        product => product.id === action.payload.id,
      );
      if (product) {
        product.units = (product.units || 0) + 1;
      } else {
        const productToAdd = action.payload;
        const productWithUnits = {...productToAdd, units: 1};
        state.map.push(productWithUnits);
      }
    },
    removeFromCart(state, action: PayloadAction<Product>) {
      const product = state.map.find(
        product => product.id === action.payload.id,
      );
      if (product) {
        product.units = product.units > 0 ? (product.units || 0) - 1 : 0;
      }
      if (product?.units === 0) {
        const index = state.map.findIndex(prod => prod.id === product.id);
        state.map.splice(index);
      }
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export const cartCount = (state: {cart: CartState}) =>
  state.cart.map.reduce((total, product) => total + (product.units || 0), 0);
export default cartSlice.reducer;
