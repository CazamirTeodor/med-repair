import React from "react";
import CloseIcon from "../assets/images/close-icon.png";
import ClinicIcon from "../assets/images/clinic.jpeg";
import StarIcon from "../assets/images/star.png";

import "./ClinicPopup.css";

class ClinicPopup extends React.Component {
  render() {
    return (
      <div className="clinic-popup">
        <div className="clinic-popup-content">
          <div className="close-button" onClick={this.props.onClick}>
            <img src={CloseIcon} alt="close icon" />
          </div>
          <div className="clinic-card">
            <img src={ClinicIcon} alt="clinic-icon" />
            <div className="clinic-details">
              <p className="name">Clinica Dental Med</p>
              <p className="position">Clinica de Medicina Generala</p>
              <div className="rating-wrapper">
                <div className="rating">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <img src={StarIcon} key={i} alt="star" />
                    ))}
                </div>
                <p>{3}</p>
                <p>({23} de rating-uri)</p>
              </div>

              <p className="position">{1000} de programari</p>
              {/* <p className="address">str. Aparatorii Patriei, 11</p>
              <p className="phone">075-123-456</p>
              <p className="email"></p> */}
            </div>
            <div className="clinic-contact">
              <div className="contact-wrapper">
                <p>Bld. Victoriei, nr. 20-25, Bucuresti</p>
                <p>+400248504988</p>
                <p>deltal.med@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClinicPopup;
