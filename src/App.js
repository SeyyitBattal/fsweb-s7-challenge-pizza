import React from "react";
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
          <div className="fiyatDivi">
            <h1>85.50 ₺</h1>
            <span> 4.9 (200)</span>
          </div>

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
