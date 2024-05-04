// Store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from "@/redux/rootReducers";

const store = configureStore({
    reducer: rootReducer,
})

const persistor = persistStore(store);

export { store, persistor };