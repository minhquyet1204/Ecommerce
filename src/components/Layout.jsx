import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HandleRoutes from "../routes/HandleRoutes";
import { BrowserRouter } from "react-router-dom";
const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div className="main">
          <HandleRoutes />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
