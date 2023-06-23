import { useState } from "react";
import "./App.css";
import Mywedding from "./components/Mywedding";
import Schedule from "./components/Schedule";
import DressCode from "./components/DressCode";
import Attendance from "./components/Attendance";
import Photos from "./components/Photos";
import Presents from "./components/Presents";
import Flower from "./components/Flower";
import Flower1 from "./components/Flowers1";


function App() {


  return (
    <>
      <div className="App">
        {/* <div className="First-Background">
          <p>KAREN & LUIS</p>
        </div> */}

        <Photos />

        <Mywedding />
        <Flower />
        <Schedule />
        <Flower />
        <DressCode />
        <Flower />
        <Presents />
        <Flower />
        <Attendance />
        <Flower1/>
      </div>
    </>
  );
}

export default App;
