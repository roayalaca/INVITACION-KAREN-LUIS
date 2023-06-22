import React from "react";

const Schedule = () => {

  return (
    <div className="Third-Background">
      <div className="Third">
        <div className="Schedule">
          <p>Itinerario</p>
        </div>

        <div className="Schedule1">
          <div className="Ceremony">
            <div className="CereImage">
              <img src="./Church.png" alt="" />
              <p className="p1">7:00 pm</p>
              <a
                href="https://www.google.com/maps/place/Parroquia+San+Juan+Pablo+II/@20.5333295,-103.4811896,17z/data=!3m1!4b1!4m20!1m13!4m12!1m4!2m2!1d-99.0460533!2d19.4967432!4e1!1m6!1m2!1s0x842f54eb8f5098d5:0x4358835f67f1c07f!2sParroquia+San+Juan+Pablo+II%0D%0A%0D%0AP%C2%B0+de+la+Reina+2,+Villa+California,+45640+San+Agustin,+Jal!2m2!1d-103.4786126!2d20.5333377!3m5!1s0x842f54eb8f5098d5:0x4358835f67f1c07f!8m2!3d20.5333245!4d-103.4786147!16s%2Fg%2F11ddx0z9jk?entry=ttu"
                target="_blank"
              >
                VER MAPA
              </a>
            </div>

            <div className="CereText">
              <h1>Ceremonia Religiosa</h1>
              <h2 className="p3">Parroquia San Juan Pablo II</h2>
              <p className="p4">
                P° de la Reina 2, Villa California, 45640 San Agustín, Jal
              </p>
            </div>
          </div>

          <div className="Cheers">
            <div className="CereImage">
              <img src="./Cheers.png" alt="" />
              <p className="p1">8:30 pm</p>
              <a
                href="https://www.google.com/maps/place/Quinta+Los+Agapantos/@20.5621892,-103.4823937,17z/data=!3m1!4b1!4m20!1m13!4m12!1m4!2m2!1d-99.0460533!2d19.4967432!4e1!1m6!1m2!1s0x8428ab34abadeeef:0xd1064427b36cb43e!2sQuinta+los+Agapantos%0D%0A%0D%0ACam.+a+las+Moras+1532,+45640+San+Agust%C3%ADn,+Jal.!2m2!1d-103.4798294!2d20.5621411!3m5!1s0x8428ab34abadeeef:0xd1064427b36cb43e!8m2!3d20.5621842!4d-103.4798188!16s%2Fg%2F11h0c8h13?entry=ttu"
                target="_blank"
              >
                VER MAPA
              </a>
            </div>

            <div className="CheersText">
              <h1>Recepción</h1>
              <h2 className="p3">Quinta los Agapantos</h2>
              <p className="p5">
                Cam. a las Moras 1532, 45640 San Agustín Jalisco
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
