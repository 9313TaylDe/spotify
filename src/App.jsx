import { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Cards from "./componets/Cards";
import DetailsPage from "./componets/DetailsPage";
import "./App.css";
import Home from "./componets/Home";
import PageDetails from "./componets/PageDetails";
import Layout from "./componets/Layout";
function App() {
  return (
    <div className="container_master_pai">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Cards /* pass necessary props here */ />} />
          <Route path="/details/:id" element={<PageDetails />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
