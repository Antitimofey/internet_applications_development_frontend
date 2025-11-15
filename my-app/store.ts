import { combineReducers, configureStore } from "@reduxjs/toolkit"
import dataReducer from "./slices/dataSlice"

// Создаем store и сохраняем в переменную
const store = configureStore({
    reducer: combineReducers({
        ourData: dataReducer
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store