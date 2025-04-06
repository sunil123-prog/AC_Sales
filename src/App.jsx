import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Airconditioners from "./Components/Airconditioners";
import Services from "./Components/Services";
import NotFound from "./Components/NotFound";
import Layout from "./Components/Layout";
import Contact from "./Components/Contact";
import SpareParts from "./Components/SpareParts"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes that include Navbar via Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/airconditioners" element={<Airconditioners />} />
          <Route path="/services" element={<Services />} />
          <Route path="/spareparts" element={<SpareParts />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Route that does NOT use Layout (no Navbar) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
