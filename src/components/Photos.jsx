import React from 'react';

const Photos = () => {

  let counter = 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if( counter > 3 ){
      counter = 1;
    }
  }, 3000)

  let width = window.innerWidth

  return (
    <div className="First-Background">
      <div className="title">
        <strong>KAREN & LUIS</strong>
      </div>

      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />

          <div className="slide first">
            <img
              src={width >= 992 ? "Karen_Luis4.jpg" : "Karen_Luis.jpg"}
              alt=""
            />
          </div>

          <div className="slide">
            <img
              src={width >= 992 ? "Karen_Luis5.jpeg" : "Karen_Luis1.jpg" }
              alt=""
            />
          </div>

          <div className="slide">
            <img
              src={width >= 992 ? "Karen_Luis6.jpg" : "Karen_Luis2.jpg"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;