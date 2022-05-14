import React from "react";

import "./Landing.css";
import Doctor from "../assets/images/Doctor.png";
import Doctor_icon from "../assets/images/doctor_icon.png";
import Clinica_icon from "../assets/images/clinica_icon.png";
import medlogo from "../assets/images/logo.png";
import Banner from "../assets/images/Banner.png";

export default function Landing() {
  const handlePushButton = () => {};

  return (
    <div className="page landing-page">
      <div className="logo">
        <img
          className="logo-picture"
          src={medlogo}
          alt="doctor pictogram"
        ></img>
      </div>

      <div className="menu">
        <div className="menu-button" onClick={() => handlePushButton()}>
          <img src={Doctor_icon} alt="doctor pictogram"></img>
          <p>Caută un medic</p>
        </div>
        <div className="assist-option">
          <img className="chat-bubble" src={Banner} alt="chat"></img>
          <img className="doctor" src={Doctor} alt="doctor"></img>
          <div className="assist-button">
            <p>Am nevoie de asistenţă</p>
          </div>
        </div>
        <div className="menu-button" onClick={() => handlePushButton()}>
          <img src={Clinica_icon} alt="clinic"></img>
          <p>Caută o clinică</p>
        </div>
      </div>
    </div>
  );
}
