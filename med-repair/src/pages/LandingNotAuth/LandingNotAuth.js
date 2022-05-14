import React from "react";

import "./notauth.css";
import Doctor from "../../images/Doctor.png";
import Doctor_icon from "../../images/doctor_icon.png";
import Clinica_icon from "../../images/clinica_icon.png";
import medlogo from "../../images/Logo.png";
import Banner from "../../images/Banner.png";

import Chat from "./Chat";

export default function LandingNotAuth() {
  const handlePushButton = () => {};

  return (
    <div className="page">
      <div className="logo">
        <img
          className="logo-picture"
          src={medlogo}
          alt="doctor pictogram"
        ></img>
      </div>
      <div
        className="menu-button"
        onClick={() => handlePushButton()}
        style={{ cursor: "pointer" }}
      >
        <div className="button-pictogram">
          <div>
            <img src={Doctor_icon} alt="doctor pictogram"></img>
            <div className="button-text">Caută un medic</div>
          </div>
        </div>
      </div>
      <div className="doctor-pictogram">
        <div className="doctor-dialog">
          <img className="banner" src={Banner} alt="doctor pictogram"></img>
          <img src={Doctor} alt="doctor pictogram"></img>
        </div>
        <div style={{ cursor: "pointer" }} className="assist-button">
          Am nevoie de asistenţă
        </div>
      </div>
      <div
        className="menu-button"
        onClick={() => handlePushButton()}
        style={{ cursor: "pointer" }}
      >
        <div className="button-pictogram">
          <div>
            <img src={Clinica_icon} alt="doctor pictogram"></img>
            <div className="button-text">Caută o clinică</div>
          </div>
        </div>
      </div>

      <Chat />
    </div>
  );
}
