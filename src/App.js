import { Routes , Route } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import HomePage from './pages/HomePage.js'
import LocationPage from './pages/LocationPage.js'
import ClassesPage from './pages/ClassesPage.js'
import ContactPage from "./pages/ContactPage.js"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="location" element={<LocationPage />} />
        <Route path="training" element={<ClassesPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
