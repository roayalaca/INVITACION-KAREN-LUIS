import React from "react";

const DressCode = () => {
  return (
    <div className="Fourth-Background">
      <div className="Fourth">
        <div className="DressCode">
          <p>Código de Vestimenta</p>
        </div>

        <div className="Dressing">
          <div className="Traje">
            <img src="./Traje.png" alt="" />
            <p>Traje</p>
            <p>Corbata/Moño</p>
          </div>
          <div className="Formal">
            <h1>Formal</h1>
          </div>
          <div className="Dress">
            <img src="./Dress.png" alt="" />
            <p>Vestido Largo</p>
          </div>
        </div>

        <div className="Reservation">
          <p>Se reservan los colores:</p>
          <h3>Blanco y su gama</h3>
        </div>
      </div>
    </div>
  );
};

export default DressCode;
