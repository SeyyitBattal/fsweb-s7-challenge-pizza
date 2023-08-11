import React from "react";
// import axios from "axios";
// import * as Yup from "yup";
// import { toast } from "react-toastify";
import Sform from "./Sform";
import Salindi from "./Salindi";
import { useState } from "react";

const App = () => {
  const [adet, setAdet] = useState(1);
  const arttir = () => {
    setAdet(adet + 1);
  };
  const azalt = () => {
    setAdet(adet - 1);
    if (adet === 1) {
      setAdet(1);
    }
  };
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
        <footer>
          <div className="adet-sayaci">
            <button onClick={azalt}>-</button>
            <p>{adet}</p>
            <button onClick={arttir}>+</button>
          </div>
          <div className="siparis-toplami">
            <label>Sipariş Toplamı </label>
            <label>Seçimler </label>
            <label>Toplam </label>
            <button>SİPARİŞ VER</button>
          </div>
        </footer>
      </div>
    </>
  );
};
export default App;
