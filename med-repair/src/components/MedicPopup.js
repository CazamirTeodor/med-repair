import React from "react";
import CloseIcon from "../assets/images/close-icon.png";
import DoctorIcon from "../assets/images/surgeon-doctor.png";
import ClinicIcon from "../assets/images/clinic.jpeg";
import StarIcon from "../assets/images/star.png";
import "./MedicPopup.css";
import DropdownList from "./DropdownList";

class MedicPopup extends React.Component {
  render() {
    var medic_details = {
      name: "Dr. Ion Popescu",
      rating: 3,
      ratingNb: 233,
      appointments: 23,
      speciality: "Stomatologie",
      position: "Medic specialist",
      workplaces: [
        "Clinica Dental Med, str. Aparatorii Patriei, 11",
        "Spitalul Militar de Urgenta Bucuresti, str. Progresului, 1",
        "Clinica Dr. Rusu, str. Azorelelor, 13",
      ],
    };
    return (
      <div className="medic-popup">
        <div className="medic-popup-content">
          <div className="close-button" onClick={this.props.onClick}>
            <img src={CloseIcon} alt="close icon" />
          </div>
          <div className="medic-card">
            <img src={DoctorIcon} />
            <div className="medic-details">
              <p className="name">{medic_details.name}</p>
              <p className="position">
                {medic_details.position}, {medic_details.speciality}
              </p>
              <div className="rating-wrapper">
                <div className="rating">
                  {Array(medic_details.rating)
                    .fill(0)
                    .map((_, i) => (
                      <img src={StarIcon} key={i} alt="star" />
                    ))}
                </div>
                <p>{medic_details.rating}</p>
                <p>({medic_details.ratingNb} de rating-uri)</p>
              </div>
              <p className="appointments">
                {medic_details.appointments} de programari
              </p>
            </div>
            <div className="medic-workplaces">
              <img src={ClinicIcon} />
              <div className="workplaces-wrapper">
                {medic_details.workplaces.map((workplace, i) => (
                  <p key={i}>{workplace}</p>
                ))}
              </div>
            </div>
          </div>
          <p className="banner">Selecteaza serviciul de care ai nevoie:</p>
          <div className="services-wrapper">
            <div className="service">
              <p className="name">Consultatie</p>
              <p className="price">100 lei</p>
            </div>
            <div className="service">
              <p className="name">Control</p>
              <p className="price">150 lei</p>
            </div>
            <div className="service">
              <p className="name">Implant dentar</p>
              <p className="price">500 lei</p>
            </div>
            <div className="service">
              <p className="name">Detartraj</p>
              <p className="price">200 lei</p>
            </div>
          </div>
          <div className="filters-wrapper">
            <div className="filter">
              <p className="text">Selecteaza locatia:</p>
              <DropdownList options={["Medic", "Clinica"]} />
            </div>
            <div className="filter">
              <p className="text">Selecteaza ziua:</p>
              <input type="date" />
            </div>
            <div className="filter">
              <p className="text">Selecteaza ora:</p>
              <input type="time" />
            </div>
          </div>
          <div className="appointment-button" onClick={this.props.onClick}>
                    <p className="text">Programeaza-te</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MedicPopup;
