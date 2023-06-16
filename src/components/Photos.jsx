import React from 'react';

const Photos = () => {

  let counter = 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if( counter > 3 ){
      counter = 1;
    }
  }, 5000)

  return (
    <div className='First-Background'>

      

      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />

          <div className="slide first">
            <img src="Karen_Luis.jpg" alt="" />
          </div>

          <div className="slide">
            <img src="Karen_Luis1.jpg" alt="" />
          </div>

          <div className="slide">
            <img src="Karen_Luis2.jpg" alt="" />
          </div>
        </div>

        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
        </div>

        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
        </div>

        
      </div>
    </div>
  );
};

export default Photos;