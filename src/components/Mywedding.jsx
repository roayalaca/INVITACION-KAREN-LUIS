import React from 'react';
import { useState, useRef, useEffect } from 'react';

const Mywedding = () => {

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('Nov 04, 2023 19:00:00').getTime();
        let interval = setInterval( () => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const timerDays = Math.floor( distance / (1000 * 60 * 60 * 24));
            const timerHours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const timerMinutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const timerSeconds = Math.floor((distance % (1000 * 60) / (1000)));

            if(distance < 0) {
                clearInterval(interval.current);
            } else {
                setDays(timerDays);
                setHours(timerHours);
                setMinutes(timerMinutes);
                setSeconds(timerSeconds);
            }

        }, 1000);
    };


    useEffect( () => {
        startTimer();
        return () => {
             clearInterval(interval.current); 
        }
    })

    return (
      <div className="Second-Background">
        <div className="My-wedding">
          <p>Nuestra</p>
          <p className="Wedding">Boda</p>
        </div>

        <div className="Date">
          <p>¡Nos casamos!</p>
          <h1>4 NOVIEMBRE 2023</h1>
          <p className="Guadalajara">Guadalajara, Jalisco</p>
        </div>

        <div className="Counter">
          <div className='days1'>
            <p className="days">{days}</p>
            <p>
              <small>Días</small>
            </p>
          </div>
          <div className='hours1'>
            <p className="hours">{hours}</p>
            <p>
              <small>Horas</small>
            </p>
          </div>
          <div className='minutes1'>
            <p className="minutes">{minutes}</p>
            <p>
              <small>Minutos</small>
            </p>
          </div>
          <div className='seconds1'>
            <p className="seconds">{seconds}</p>
            <p>
              <small>Segundos</small>
            </p>
          </div>
        </div>

        <div className='Flowers'>
            <img src="./flowers.jpg" alt="" />
        </div>


      </div>
    );
};

export default Mywedding;