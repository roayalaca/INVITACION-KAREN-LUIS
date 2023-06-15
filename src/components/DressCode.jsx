import React from "react";

const DressCode = () => {
  return (
    <div className="Fourth-Background">
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
          <p>Vestido</p>
        </div>
      </div>

      <div className="Flowers2">
        <img src="./flowers.jpg" alt="" />
      </div>

      <div className="Presents">
        <h1>Mesa de Regalos</h1>
        <p>
          El mejor regalo que nos puedes dar es tu presencia, pero si quieres
          obsequiarnos algo puedes hacerlo a través de las siguientes mesas de
          regalos:
        </p>
        <div className="presents-table">
          <div className="liverpool">
            <a
              href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51224743"
              target="_blank"
            >
              <img src="./liverpool.jpg" alt="" />
            </a>
          </div>

          <div className="amazon">
            <a
              href="https://www.amazon.com.mx/wedding/share/bodakaren-luis"
              target="_blank"
            >
              <img src="./amazon.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressCode;
