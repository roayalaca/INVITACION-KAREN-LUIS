import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Attendance = () => {
  const [name, setName] = useState("");
   const [attendance, setAttendance] = useState("");
   const [phone, setPhone] = useState("");

  const submit = (e) => {
    const data = {
      completename: name,
      attendance: attendance,
      phone: phone,
    };

    if(name && attendance && phone){
       axios
         .post("http://localhost:8000/invitados", data)
         .then((resp) => {
          console.log(resp.data);
         })
         .catch((error) => {
           console.error(error);
         });
      alert("Su respuesta ha sido registrada");
    } else {
          e.preventDefault();
          alert("Favor de llenar todos los campos")
    }

   
  };

  return (
    <div className="Fifth-Background">
      <div className="funny">
        <img src="./flowers.jpg" alt="" />
        <p className="attendance">Confirma tu asistencia</p>
        <p className="phrase">
          ***Te invitamos cordialmente a una noche llena de amor, luz y perreo
          intenso hasta el subsuelo. ¡Te esperamos!
        </p>
      </div>

      <div className="Form">
        <form onSubmit={(e) => submit(e)}>
          <div className="div">
            <label htmlFor="name" className="name">
              <strong>Nombre completo</strong>
            </label>
            <input
              className="input"
              name="name"
              id="name"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="div1">
            <strong className="middle">Confirmación</strong>
            <br />

            <div className="options">
              <div className="yes">
                <label htmlFor="Si" className="confirmation">
                  Sí asistiré
                </label>
                <input
                  className="input1"
                  name="attendance"
                  id="Si"
                  type="radio"
                  checked={attendance === "sí"}
                  onChange={() => setAttendance("sí")}
                />
              </div>

              <div className="no">
                <label htmlFor="No" className="confirmation">
                  No asistiré
                </label>
                <input
                  className="input2"
                  name="attendance"
                  id="No"
                  type="radio"
                  checked={attendance === "no"}
                  onChange={() => setAttendance("no")}
                />
              </div>
            </div>
          </div>

          <br />

          <div className="div2">
            <label htmlFor="phone" className="name">
              <strong>Whatsapp/Teléfono</strong>
            </label>

            <input
              className="input"
              name="phone"
              id="phone"
              value={phone}
              type="text"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <br />

          <button type="submit">Enviar</button>
        </form>
      </div>

      <div className="funny1">
        <p className="phrase">
          * Ah, y besos de tres, pero no con nosotros porque ya seremos papas
          casadas, literalmente.
        </p>
        <img src="./flowers.jpg" alt="" />
      </div>
    </div>
  );
};

export default Attendance;
