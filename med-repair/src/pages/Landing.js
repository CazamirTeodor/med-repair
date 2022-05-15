import React from "react";
import { withRouter } from "react-router-dom";
import "./Landing.css";
import Doctor from "../assets/images/Doctor.png";
import Doctor_icon from "../assets/images/doctor_icon.png";
import Clinica_icon from "../assets/images/clinica_icon.png";
import medlogo from "../assets/images/logo.png";
import Banner from "../assets/images/Banner.png";

import Chat from "../components/Chat";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openChat: false,
    };
  }

  setOpenChat = () => {
    this.setState({ openChat: !this.state.openChat });
  };

  render() {
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
          <div className="menu-button" >
            <img src={Doctor_icon} alt="doctor pictogram"></img>
            <p>Caută un medic</p>
          </div>
          <div className="assist-option">
            <img className="chat-bubble" src={Banner} alt="chat"></img>
            <img className="doctor" src={Doctor} alt="doctor"></img>
            <div onClick={this.setOpenChat} className="assist-button">
              <p>Am nevoie de asistenţă</p>
            </div>
          </div>
          <div className="menu-button" >
            <img src={Clinica_icon} alt="clinic"></img>
            <p>Caută o clinică</p>
          </div>

          <Chat openChat={this.state.openChat} setOpenChat={this.setOpenChat} />
        </div>
      </div>
    );
  }
}

export default withRouter(Landing);
