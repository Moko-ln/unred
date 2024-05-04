import { createSlice } from '@reduxjs/toolkit';

export const commandeSlice = createSlice({
    name: 'commande',
    initialState: {
        id: null,
    },
    reducers: {
        setItemId: (state, action) => {
            state.id = action.payload;
        },
        clearItemId: (state) => {
            state.id = null;
        }
    },
});

export const { setItemId, clearItemId } = commandeSlice.actions;

export default commandeSlice.reducer;
