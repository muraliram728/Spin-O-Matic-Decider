import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Notfound from "./pages/Notfound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// localStorage.setItem("WheelOption", JSON.stringify([]));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
