import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main";
import Header from "./components/Header/Header";

import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
          />
          <Route path="/country/:name" element={<DetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
