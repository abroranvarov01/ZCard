import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import MainLayout from "./layout/main-layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
