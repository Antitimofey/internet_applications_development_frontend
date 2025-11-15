import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import type { RootState } from "../store"; // Импортируйте RootState из store

// Определите тип для данных
interface DataItem {
  // добавьте поля ваших данных
  id: number;
  // ... другие поля
}

// Определите тип для датасета
interface Dataset {
  id: string | number;
  name: string;
  data: DataItem[];
  createdAt?: string;
}

// ОБНОВИТЕ интерфейс состояния
interface DataState {
  Data: DataItem[];
  datasets: Dataset[];  // ← ДОБАВЬТЕ эту строку
}


// ОБНОВИТЕ начальное состояние
const initialState: DataState = {
  Data: [],
  datasets: []  // ← ДОБАВЬТЕ эту строку
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData(state, action: PayloadAction<DataItem[]>) {
            state.Data = action.payload
        },
        // ДОБАВЬТЕ новые редюсеры для датасетов
        addDataset(state, action: PayloadAction<Dataset>) {
            state.datasets.push(action.payload)
        },
        removeDataset(state, action: PayloadAction<string | number>) {
            state.datasets = state.datasets.filter(dataset => dataset.id !== action.payload)
        },
        updateDataset(state, action: PayloadAction<Dataset>) {
            const index = state.datasets.findIndex(dataset => dataset.id === action.payload.id)
            if (index !== -1) {
                state.datasets[index] = action.payload
            }
        },
        setDatasets(state, action: PayloadAction<Dataset[]>) {
            state.datasets = action.payload
        }
    }
})

export const useData = () =>
    useSelector((state: RootState) => state.ourData.Data)

export const useDatasets = () =>
    useSelector((state: RootState) => state.ourData.datasets)  // ← ДОБАВЬТЕ этот хук


// ОБНОВИТЕ экспорт actions
export const {
    setData: setDataAction,
    addDataset: addDatasetAction,        // ← ДОБАВЬТЕ
    removeDataset: removeDatasetAction,  // ← ДОБАВЬТЕ
    updateDataset: updateDatasetAction,  // ← ДОБАВЬТЕ
    setDatasets: setDatasetsAction       // ← ДОБАВЬТЕ
} = dataSlice.actions

export default dataSlice.reducer