import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./../Routes";

import { HomePage } from './pages/HomePage.tsx'
import DatasetListPage from './pages/DatasetListPage.tsx'
import DatasetPage from "./pages/DatasetPage.tsx";

function App() {
  return (
    <BrowserRouter basename='/internet_applications_development_frontend'>
      <Routes>
        <Route path={ROUTES.HOME} index element={<HomePage />} />
        <Route path={ROUTES.DATASETS} element={<DatasetListPage />} />
        <Route path={`${ROUTES.DATASETS}/:id`} element={<DatasetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;