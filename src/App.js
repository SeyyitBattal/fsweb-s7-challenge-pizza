import React from "react";
// import * as Yup from "yup";
// import { toast } from "react-toastify";
import Sform from "./Sform";

const App = () => {
  return (
    <>
      <header>
        <h1>Teknolojik Yemekler</h1>
        <div className="header-links">
          <a href="#">Ana Sayfa - </a>
          <a href="#">Seçenekler - </a>
          <a href="#">Siparişi Oluştur</a>
        </div>
      </header>
      <div className="except-header">
        <div className="intro">
          <p>Position Absolute Acı Pizza</p>
          <p>Fiyat 4.9 (200)</p>
          <p>
            Pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza
            pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza
            pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza
            pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza
            pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza
            pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza{" "}
          </p>
        </div>
        <Sform />
      </div>
    </>
  );
};
export default App;
