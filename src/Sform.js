import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Sform = () => {
  const [siparisData, setSiparisData] = useState({
    boyutData: "",
    hamurData: "",
    malzemePepperoni: false,
    malzemeSosis: false,
    malzemeKanada: false,
    malzemeTavuk: false,
    malzemeSoğan: false,
    malzemeDomates: false,
    malzemeMisir: false,
    malzemeSucuk1: false,
    malzemeJalepeno: false,
    malzemeSarimsak: false,
    malzemeBiber: false,
    malzemeSucuk2: false,
    malzemeAnanas: false,
    malzemeKabak: false,
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
                  name="hamurData"
                  typ
                  value="Hamur"
                  onChange={handleChange}
                >
                  Hamur Kalınlığı
                </option>
                <option
                  name="hamurData"
                  typ
                  value="ince"
                  onChange={handleChange}
                >
                  İnce
                </option>
                <option
                  name="hamurData"
                  typ
                  value="orta"
                  onChange={handleChange}
                >
                  Doyurucu Orta
                </option>
                <option name="hamurData" value="kalin" onChange={handleChange}>
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
              name="malzemePepperoni"
              checked={siparisData.malzemePepperoni}
              onChange={handleChange}
            />{" "}
            Pepperoni
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeSosis"
              checked={siparisData.malzemeSosis}
              onChange={handleChange}
            />{" "}
            Sosis
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeKanada"
              checked={siparisData.malzemeKanada}
              onChange={handleChange}
            />{" "}
            Kanada Jambonu
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeTavuk"
              checked={siparisData.malzemeTavuk}
              onChange={handleChange}
            />{" "}
            Tavuk Izgara
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeSoğan"
              checked={siparisData.malzemeSoğan}
              onChange={handleChange}
            />{" "}
            Soğan
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeDomates"
              checked={siparisData.malzemeDomates}
              onChange={handleChange}
            />{" "}
            Domates
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeMisir"
              checked={siparisData.malzemeMisir}
              onChange={handleChange}
            />{" "}
            Mısır
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeSucuk1"
              checked={siparisData.malzemeSucuk1}
              onChange={handleChange}
            />{" "}
            Sucuk
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeJalepeno"
              checked={siparisData.malzemeJalepeno}
              onChange={handleChange}
            />{" "}
            Jalepeno
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeSarimsak"
              checked={siparisData.malzemeSarimsak}
              onChange={handleChange}
            />{" "}
            Sarımsak
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeBiber"
              checked={siparisData.malzemeBiber}
              onChange={handleChange}
            />{" "}
            Biber
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeSucuk2"
              checked={siparisData.malzemeSucuk2}
              onChange={handleChange}
            />{" "}
            Sucuk
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeAnanas"
              checked={siparisData.malzemeAnanas}
              onChange={handleChange}
            />{" "}
            Ananas
          </label>
          <label>
            <input
              type="checkbox"
              name="malzemeKabak"
              checked={siparisData.malzemeKabak}
              onChange={handleChange}
            />{" "}
            Kabak
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
