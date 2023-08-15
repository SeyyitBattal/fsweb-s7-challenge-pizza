import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
let valueDegerleri;
let ekMalzemeUcreti = 0;

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

  const [formErrors, setFormErrors] = useState({
    boyutData: "",
    hamurData: "",
    malzemePepperoni: "",
    malzemeSosis: "",
    malzemeKanada: "",
    malzemeTavuk: "",
    malzemeSoğan: "",
    malzemeDomates: "",
    malzemeMisir: "",
    malzemeSucuk1: "",
    malzemeJalepeno: "",
    malzemeSarimsak: "",
    malzemeBiber: "",
    malzemeSucuk2: "",
    malzemeAnanas: "",
    malzemeKabak: "",
    notData: "",
  });

  const [isFormValid, setFormValid] = useState(false);

  const formSchema = Yup.object().shape({
    boyutData: Yup.string(),
    hamurData: Yup.string().oneOf(
      ["ince", "orta", "kalin"],
      "Lütfen hamur boyutunu seçiniz"
    ),
    malzemePepperoni: Yup.boolean(),
    malzemeSosis: Yup.boolean(),
    malzemeKanada: Yup.boolean(),
    malzemeTavuk: Yup.boolean(),
    malzemeSoğan: Yup.boolean(),
    malzemeDomates: Yup.boolean(),
    malzemeMisir: Yup.boolean(),
    malzemeSucuk1: Yup.boolean(),
    malzemeJalepeno: Yup.boolean(),
    malzemeSarimsak: Yup.boolean(),
    malzemeBiber: Yup.boolean(),
    malzemeSucuk2: Yup.boolean(),
    malzemeAnanas: Yup.boolean(),
    malzemeKabak: Yup.boolean(),
    notData: Yup.string(),
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

    Yup.reach(formSchema, name)
      .validate(type === "checkbox" ? checked : value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  useEffect(() => {
    console.log("Sipariş datası değişti: ", siparisData);
    formSchema.isValid(siparisData).then((valid) => setFormValid(valid));
    ///
    valueDegerleri = Object.values(siparisData);
    const trueDizisi = valueDegerleri.filter((truelar) => {
      return truelar == true;
    });
    console.log("true dizisi: ", trueDizisi);
    ekMalzemeUcreti = trueDizisi.length * 5;
    ///
  }, [siparisData, adet]);

  useEffect(() => {
    console.log("Form validation error state updated", formErrors);
  }, [formErrors]);

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
              <select
                name="hamurData"
                onChange={handleChange}
                invalid={formErrors.hamurData}
              >
                <option value="Hamur">Hamur Kalınlığı</option>
                <option value="ince">İnce</option>
                <option value="orta">Doyurucu Orta</option>
                <option value="kalin">Süper Kalın</option>
              </select>
            </label>
          </div>
        </div>
        <div className="malzeme-secimi">
          <label className="checkbox-header">
            <label> Ek Malzemeler </label>
            <label>En fazla 10 malzeme seçebilirsiniz. 5₺</label>
          </label>
          <div className="checkboxList">
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
          <p className="adetClass">{adet}</p>
          <button onClick={arttir}>+</button>
        </div>
        <div className="siparis-toplami">
          <label>Sipariş Toplamı </label>
          <label>Seçimler {ekMalzemeUcreti} ₺</label>
          <label>Toplam {(85.5 + ekMalzemeUcreti) * adet} ₺</label>
          <button
            type="submit"
            onClick={handleSiparisVer}
            disabled={!isFormValid}
          >
            SİPARİŞ VER
          </button>
        </div>
      </footer>
    </>
  );
};

export default Sform;
