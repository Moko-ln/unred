'use client'

import { Provider } from 'react-redux'
import { store } from './Store'
import {Toaster} from "sonner";

export default function StoreProvider({ children }) {
    return <Provider store={store}>{children}</Provider>
}