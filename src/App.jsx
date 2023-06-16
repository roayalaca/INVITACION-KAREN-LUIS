import { useState } from "react";
import "./App.css";
import Mywedding from "./components/Mywedding";
import Schedule from "./components/Schedule";
import DressCode from "./components/DressCode";
import Attendance from "./components/Attendance";
import Photos from "./components/Photos";



function App() {


  return (
    <>
      <div className="App">
        
        {/* <div className="First-Background">
          <p>KAREN & LUIS</p>
        </div> */}

        <Photos/>

        <Mywedding />
        <Schedule />

        <DressCode />
        <Attendance />
      </div>
    </>
  );
}

export default App;
