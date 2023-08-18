import React from "react";
import * as Yup from "yup";
import { useEffect } from "react";
import { useState } from "react";
import Boyut from "./Boyut";
import Hamur from "./Hamur";
import EkMalzeme from "./EkMalzeme";
let valueDegerleri;
let ekMalzemeUcreti = 0;
let boyutUcret = 0;
let hamurUcret = 0;
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
    console.log("Sipariş verilen adet: ", adet);
    // axios.post
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setSiparisData({
      ...siparisData,
      [name]: type === "checkbox" ? checked : value,
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
    valueDegerleri = Object.values(siparisData);
    ///
    const trueDizisi = valueDegerleri.filter((truelar) => {
      return truelar === true;
    });
    console.log("true dizisi: ", trueDizisi);
    ekMalzemeUcreti = trueDizisi.length * 5;
    ///
    if (siparisData.boyutData === "kucuk") boyutUcret = 0;
    else if (siparisData.boyutData === "orta") boyutUcret = 10;
    else if (siparisData.boyutData === "buyuk") boyutUcret = 20;
    if (siparisData.hamurData === "ince") hamurUcret = 0;
    else if (siparisData.hamurData === "orta") hamurUcret = 10;
    else if (siparisData.hamurData === "kalin") hamurUcret = 20;
  }, [siparisData, adet]);

  useEffect(() => {
    console.log("Form validation error state updated", formErrors);
  }, [formErrors]);

  return (
    <>
      <form id="pizza-form" onSubmit={handleSiparisVer}>
        <div className="boyut-hamur">
          <Boyut handleChange={handleChange} />
          <Hamur handleChange={handleChange} formErrors={formErrors} />
        </div>
        <EkMalzeme handleChange={handleChange} siparisData={siparisData} />
        <div className="siparis-not">
          <label className="not-text">
            Sipariş Notu
            <input
              type="text"
              name="notData"
              value={siparisData.notData}
              onChange={handleChange}
              placeholder="Siparişinize eklemek istediğiniz not var mı?"
            />
          </label>
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
          <label>Seçimler {ekMalzemeUcreti}.00₺</label>
          <label>
            Toplam {(85.5 + boyutUcret + hamurUcret + ekMalzemeUcreti) * adet}₺
          </label>
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
