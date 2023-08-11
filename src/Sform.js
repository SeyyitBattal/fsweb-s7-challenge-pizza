import React from "react";
import { useState } from "react";
const Sform = () => {
  const [siparisData, setSiparisData] = useState({
    boyutData: "",
    hamurData: "",
    malzemeData: "",
    notData: "",
  });

  return (
    <>
      <form>
        <div className="boyut-hamur">
          <div className="boyut">
            <label>Boyut Seç *</label>
            <label>
              <input type="radio" name="boyutData" value={1} />
              Küçük
            </label>
            <label>
              <input type="radio" name="boyutData" value={2} />
              Orta
            </label>
            <label>
              <input type="radio" name="boyutData" value={3} />
              Büyük
            </label>
          </div>
          <div className="hamur">
            <label>
              Hamur Seç *
              <select name="selectedFruit" defaultValue="orange">
                <option name="hamurData" value="Hamur">
                  Hamur Kalınlığı
                </option>
                <option name="hamurData" value="ince">
                  İnce
                </option>
                <option name="hamurData" value="orta">
                  Doyurucu Orta
                </option>
                <option name="hamurData" value="kalin">
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
            <input type="checkbox" name="malzemeData" /> Pepperoni
          </label>
          <label>
            <input type="checkbox" name="malzemeData" /> Sosis
          </label>
          <label>
            <input type="checkbox" name="malzemeData" /> Kanada Jambonu
          </label>
          <label>
            <input type="checkbox" name="malzemeData" /> Tavuk Izgara
          </label>
          <label>
            <input type="checkbox" name="malzemeData" /> Soğan
          </label>
          <label>
            <input type="checkbox" name="malzemeData" /> Domates
          </label>
          <label>
            <input type="checkbox" name="malzemeData" /> Mısır
          </label>
          <label>
            <input type="checkbox" name="malzemeData" /> Sucuk
          </label>
          <label>
            <input type="checkbox" name="malzemeData" /> Jalepeno
          </label>
          <label>
            <input type="checkbox" name="malzemeData" /> Sarımsak
          </label>
          <label>
            <input type="checkbox" name="malzemeData" /> Biber
          </label>
          <label>
            <input type="checkbox" name="malzemeData" /> Sucuk
          </label>
          <label>
            <input type="checkbox" name="malzemeData" /> Ananas
          </label>
          <label>
            <input type="checkbox" name="malzemeData" /> Kabak
          </label>
        </div>
        <div className="siparis-not">
          <label>Sipariş Notu</label>
          <input
            type="text"
            name="notData"
            placeholder="Siparişinize eklemek istediğiniz not var mı?"
          />
        </div>
        <hr />
      </form>
    </>
  );
};

export default Sform;
