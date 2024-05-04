// WishListSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const wishListSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.splice(state.items.indexOf(action.payload), 1);
        }
    },
});

export const { addItem, removeItem } = wishListSlice.actions;

export default wishListSlice.reducer;
