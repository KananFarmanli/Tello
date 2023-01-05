import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Categories from "./pages/Categories";
import Home from "./pages/Home";

//import Main from './components/Main-fillterpage/Main'

function App() {
  return (
    <Routes>
   
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":id/:id" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;

