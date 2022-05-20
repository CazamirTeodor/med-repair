import React from "react";
import CloseIcon from "../assets/images/close-icon.png";
import DoctorIcon from "../assets/images/surgeon-doctor.png";
import ClinicIcon from "../assets/images/clinic.jpeg";
import StarIcon from "../assets/images/star.png";
import "./MedicPopup.css";
import DropdownList from "./DropdownList";
import Notification from "./Notification";

class MedicPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      selectedService: undefined,
      selectedLocation: "Locatie",
      selectedDate: undefined,
      selectedTime: undefined,
      notificationMsg: ""
    };
  }

  makeAppointment = () => {
    if (this.state.selectedService && this.state.selectedLocation && this.state.selectedDate && this.state.selectedTime) {
    
      this.setState({
        loading: true,
      });
      setTimeout(() => {
        this.setState({
          loading: false,
        });
        this.props.onClick("Programare efectuata cu succes!");
      }, 3000);
    }
    else{
      this.setState({notificationMsg: "Completeaza toate campurile!"});
      setTimeout(() => {
        this.setState({
          notificationMsg: ""
        });
      }, 4000);
    }

  };

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
      {this.state.notificationMsg && <Notification msg={this.state.notificationMsg} type="red" />}
        <div className="medic-popup-content">
          <div className="close-button" onClick={() => this.props.onClick()}>
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
            <div
              className="service"
              onClick={() => {
                this.setState({ selectedService: "Consultatie" });
              }}
              style={{
                backgroundColor:
                  this.state.selectedService === "Consultatie"
                    ? "black"
                    : "rgb(255, 255, 255)",
                color:
                  this.state.selectedService === "Consultatie"
                    ? "white"
                    : "rgb(0, 0, 0)",
              }}
            >
              <p className="name">Consultatie</p>
              <p className="price">100 lei</p>
            </div>
            <div
              className="service"
              onClick={() => {
                this.setState({ selectedService: "Control" });
              }}
              style={{
                backgroundColor:
                  this.state.selectedService === "Control"
                    ? "black"
                    : "rgb(255, 255, 255)",
                color:
                  this.state.selectedService === "Control"
                    ? "white"
                    : "rgb(0, 0, 0)",
              }}
            >
              <p className="name">Control</p>
              <p className="price">150 lei</p>
            </div>
            <div
              className="service"
              onClick={() => {
                this.setState({ selectedService: "Implant dentar" });
              }}
              style={{
                backgroundColor:
                  this.state.selectedService === "Implant dentar"
                    ? "black"
                    : "rgb(255, 255, 255)",
                color:
                  this.state.selectedService === "Implant dentar"
                    ? "white"
                    : "rgb(0, 0, 0)",
              }}
            >
              <p className="name">Implant dentar</p>
              <p className="price">500 lei</p>
            </div>
            <div
              className="service"
              onClick={() => {
                this.setState({ selectedService: "Detartraj" });
              }}
              style={{
                backgroundColor:
                  this.state.selectedService === "Detartraj"
                    ? "black"
                    : "rgb(255, 255, 255)",
                color:
                  this.state.selectedService === "Detartraj"
                    ? "white"
                    : "rgb(0, 0, 0)",
              }}
            >
              <p className="name">Detartraj</p>
              <p className="price">200 lei</p>
            </div>
          </div>
          <div className="filters-wrapper">
            <div className="filter">
              <p className="text">Selecteaza locatia:</p>
              <DropdownList
                default={this.state.selectedLocation}
                options={[
                  "Clinica Dental Med",
                  "Spitalul Militar de Urgenta Bucuresti",
                  "Clinica Dr. Rusu",
                ]}
              />
            </div>
            <div className="filter">
              <p className="text">Selecteaza ziua:</p>
              <input onChange={(e) => {
                this.setState({selectedDate: e.target.value});
              }} type="date" />
            </div>
            <div className="filter">
              <p className="text">Selecteaza ora:</p>
              <input onChange={(e) => {
                this.setState({selectedTime: e.target.value});
              }}
              type="time" />
            </div>
          </div>
          <button className="appointment-button" onClick={this.makeAppointment}>
            {this.state.loading ? (
              <div className="progress-bar">
                <div className="circle border"></div>
              </div>
            ) : (
              <p className="text">Programeaza-te</p>
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default MedicPopup;
