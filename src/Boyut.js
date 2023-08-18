import React from "react";

const Boyut = ({ handleChange }) => {
  return (
    <div>
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
    </div>
  );
};
export default Boyut;
