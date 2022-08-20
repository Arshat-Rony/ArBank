import rootReducer from "./reducers/rootreducer"
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: { rootReducer }
})

export default store;