import { createReducer } from '@reduxjs/toolkit';
import { setShoesData } from './ShoesAction';

const initialState = {
    data: null,
};

const shoesReducer = createReducer(initialState, (builder) => {
    builder.addCase(setShoesData, (state, action) => {
        state.data = action.payload;
    });
});

export default shoesReducer;
