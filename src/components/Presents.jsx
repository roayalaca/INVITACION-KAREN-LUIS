import React from 'react';

const Presents = () => {
    return (
      <div className="Sixth-Background">
        <div className="Sixth">
          <p className="p-presents">Mesa de Regalos</p>
          <div className="best">
            <p>
              El mejor regalo que nos puedes dar es tu presencia, pero si
              quieres obsequiarnos algo puedes hacerlo a través de las
              siguientes mesas de regalos:
            </p>
          </div>

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

export default Presents;