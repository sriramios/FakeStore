import {configureStore} from '@reduxjs/toolkit';
import {createStore, applyMiddleware} from 'redux';
import cartReducer from './Features/Cart/cart-slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
