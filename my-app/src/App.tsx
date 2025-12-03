import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { invoke } from "@tauri-apps/api/core";

import store from "../store.ts";
import { ROUTES } from "./../Routes";

import { HomePage } from './pages/HomePage.tsx'
import DatasetListPage from './pages/DatasetListPage.tsx'
import DatasetPage from "./pages/DatasetPage.tsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  useEffect(() => {
    // Проверяем, запущено ли приложение в Tauri
    invoke('tauri', { cmd: 'create' })
      .then(() => {
        console.log("Tauri launched");
      })
      .catch(() => {
        console.log("Tauri not launched - running in browser");
      });

    // Функция очистки при размонтировании компонента
    return () => {
      invoke('tauri', { cmd: 'close' })
        .then(() => {
          console.log("Tauri closed");
        })
        .catch(() => {
          console.log("Tauri not launched - running in browser");
        });
    };
  }, []);

  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path={ROUTES.HOME} index element={<HomePage />} />
        <Route path={ROUTES.DATASETS} element={<DatasetListPage />} />
        <Route path={`${ROUTES.DATASETS}/:id`} element={<DatasetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Обертка с Provider для Redux store
function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWrapper;