import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { AlbumPage, AlbumsPage } from "./pages";
// import ITunesPage from "./pages/ItunesPage";
import { ROUTES } from "./../Routes";

import { HomePage } from './pages/HomePage.tsx'
import ITunesPage from './pages/ITunesPage.tsx'
import AlbumPage from "./pages/AlbumPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} index element={<HomePage />} />
        <Route path={ROUTES.ALBUMS} element={<ITunesPage />} />
        <Route path={`${ROUTES.ALBUMS}/:id`} element={<AlbumPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;