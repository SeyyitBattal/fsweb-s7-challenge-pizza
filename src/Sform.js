import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Sform = () => {
  const [siparisData, setSiparisData] = useState({
    boyutData: "",
    hamurData: "",
    malzemeData: false,
    notData: "",
  });

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
  const handleSiparisVer = (e) => {
    e.preventDefault();
    console.log("Sipariş verildi.", siparisData);
    console.log("Sipariş verilirken adet: ", adet);
    // axios.post
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setSiparisData({
      ...siparisData,
      [name]: type == "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
    console.log("Sipariş datası değişti: ", siparisData);
  }, [siparisData, adet]);

  return (
    <>
      <form id="pizza-form" onSubmit={handleSiparisVer}>
        <div className="boyut-hamur">
          <div className="boyut">
            <label>Boyut Seç *</label>
            <label>
              <input
                type="radio"
                name="boyutData"
                value="kucuk"
                onChange={handleChange}
              />
              Küçük
            </label>
            <label>
              <input
                type="radio"
                name="boyutData"
                value="orta"
                onChange={handleChange}
              />
              Orta
            </label>
            <label>
              <input
                type="radio"
                name="boyutData"
                value="buyuk"
                onChange={handleChange}
              />
              Büyük
            </label>
          </div>
          <div className="hamurOzellik">
            <label>
              Hamur Seç *
              <select name="selectedHamur">
                <option
                  name="selectedHamur"
                  value="Hamur"
                  onChange={handleChange}
                >
                  Hamur Kalınlığı
                </option>
                <option
                  name="selectedHamur"
                  value="ince"
                  onChange={handleChange}
                >
                  İnce
                </option>
                <option
                  name="selectedHamur"
                  value="orta"
                  onChange={handleChange}
                >
                  Doyurucu Orta
                </option>
                <option
                  name="selectedHamur"
                  value="kalin"
                  onChange={handleChange}
                >
                  Süper Kalın
                </option>
              </select>
            </label>
          </div>
        </div>
        <div className="malzeme-secimi">
          <label>
            Ek Malzemeler <br />
            En fazla 10 malzeme seçebilirsiniz. 5₺ <br />
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeData"
              checked={siparisData.malzemeData}
              onChange={handleChange}
            />{" "}
            Pepperoni
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeData"
              checked={siparisData.malzemeData}
              onChange={handleChange}
            />{" "}
            Sosis
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeData"
              checked={siparisData.malzemeData}
              onChange={handleChange}
            />{" "}
            Kanada Jambonu
          </label>
        </div>
        <div className="siparis-not">
          <label>Sipariş Notu</label>
          <input
            type="text"
            name="notData"
            value={siparisData.notData}
            onChange={handleChange}
            placeholder="Siparişinize eklemek istediğiniz not var mı?"
          />
        </div>
        <hr />
      </form>
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
          <button type="submit" onClick={handleSiparisVer}>
            SİPARİŞ VER
          </button>
        </div>
      </footer>
    </>
  );
};

export default Sform;
