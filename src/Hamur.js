import React from "react";
const Hamur = ({ handleChange, formErrors }) => {
  return (
    <div>
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
  );
};

export default Hamur;
