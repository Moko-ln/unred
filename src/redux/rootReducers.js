// rootReducers.js
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import wishListReducer from './WishListSlice';
import commadeReducer from './CommandeSlice';
import ShoesReducer from "@/redux/ShoesReducer";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    wishlist: persistReducer(persistConfig, wishListReducer),
    commande: persistReducer(persistConfig, commadeReducer),
    shoes: persistReducer(persistConfig, ShoesReducer),
});

export default rootReducer;
