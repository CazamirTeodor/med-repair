import React from "react";
import CloseIcon from "../assets/images/close-icon.png";
import ClinicIcon from "../assets/images/clinic.jpeg";
import StarIcon from "../assets/images/star.png";
import MarkerIcon from "../assets/images/marker.png";
import PhoneIcon from "../assets/images/phone.png";
import EmailIcon from "../assets/images/email.png";
import SuitcaseIcon from "../assets/images/suitcase.png";
import DoctorIcon from "../assets/images/surgeon-doctor.png";
import Notification from "./Notification";

import "./ClinicPopup.css";
import MedicPopup from "./MedicPopup";
import SearchResult from "./SearchResult";

class ClinicPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSpecialty: undefined,
      showDoctor: false,
      notificationMsg: "",
    };
  }

  selectSpecialty = (specialty) => {
    if (this.state.selectedSpecialty === specialty) {
      this.setState({
        selectedSpecialty: undefined,
      });
    } else {
      this.setState({
        selectedSpecialty: specialty,
      });
    }
  };

  render() {
    var specialties = [
      "Cardiologie",
      "Radiologie",
      "Oftalmologie",
      "Ortopedie",
      "Chirurgie",
      "Stomatologie",
      "Pediatrie",
      "Neurologie",
      "Ginecologie",
      "Urologie",
    ];

    var medics = {
      Cardiologie: [
        {
          name: "Dr. Ion Popescu",
          rating: 3,
          ratingNb: 233,
          appointments: 23,
          speciality: "Cardiologie",
          position: "Medic specialist",
          workplaces: [
            "Clinica Dental Med, str. Aparatorii Patriei, 11",
            "Spitalul Militar de Urgenta Bucuresti, str. Progresului, 1",
            "Clinica Dr. Rusu, str. Azorelelor, 13",
          ],
        },
        {
          name: "Dr. Marian Dodescu",
          rating: 4,
          ratingNb: 233,
          appointments: 23,
          speciality: "Cardiologie",
          position: "Medic specialist",
          workplaces: [
            "Clinica Dental Med, str. Aparatorii Patriei, 11",
            "Spitalul Militar de Urgenta Bucuresti, str. Progresului, 1",
            "Clinica Dr. Rusu, str. Azorelelor, 13",
          ],
        },
        {
          name: "Dr. Gelu Gelescu",
          rating: 1,
          ratingNb: 200,
          appointments: 23,
          speciality: "Cardiologie",
          position: "Medic specialist",
          workplaces: [
            "Clinica Dental Med, str. Aparatorii Patriei, 11",
            "Spitalul Militar de Urgenta Bucuresti, str. Progresului, 1",
            "Clinica Dr. Rusu, str. Azorelelor, 13",
          ],
        },
        {
          name: "Dr. Ion Popescu",
          rating: 3,
          ratingNb: 233,
          appointments: 23,
          speciality: "Cardiologie",
          position: "Medic specialist",
          workplaces: [
            "Clinica Dental Med, str. Aparatorii Patriei, 11",
            "Spitalul Militar de Urgenta Bucuresti, str. Progresului, 1",
            "Clinica Dr. Rusu, str. Azorelelor, 13",
          ],
        },
      ],
      Radiologie: [],
      Oftalmologie: [],
      Ortopedie: [],
      Chirurgie: [],
      Stomatologie: [],
      Pediatrie: [],
      Neurologie: [],
      Ginecologie: [],
      Urologie: [],
    };
    return (
      <div className="clinic-popup">
        {this.state.notificationMsg && (
          <Notification msg={this.state.notificationMsg} type="green" />
        )}
        {this.state.showDoctor && (
          <MedicPopup
            onClick={(msg) => {
              this.setState({ showDoctor: false });
              if (msg) {
                this.setState({
                  notificationMsg: msg,
                });
              }
            }}
          />
        )}
        <div className="clinic-popup-content">
          <div className="close-button" onClick={() => this.props.onClick()}>
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
            <div className="separator"></div>
            <div className="clinic-contact">
              <div className="contact-wrapper">
                <div className="row">
                  <img src={MarkerIcon} alt="marker-icon" />
                  <p>Bld. Victoriei, nr. 20-25, Bucuresti</p>
                </div>
                <div className="row">
                  <img src={PhoneIcon} alt="phone-icon" />
                  <p>+40 0248504988</p>
                </div>
                <div className="row">
                  <img src={EmailIcon} alt="email-icon" />
                  <p>dental.med@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="appointment-details">
            <p className="title">Specialităţi disponibile la Medicus Center:</p>
            <p className="indication">
              (Alege o specialitate pentru a vedea medicii)
            </p>
            <div className="specialties">
              <div className="column">
                {specialties.slice(0, 5).map((specialty) => {
                  return (
                    <div
                      className="specialty"
                      style={{
                        backgroundColor:
                          this.state.selectedSpecialty === specialty
                            ? "white"
                            : "transparent",
                      }}
                      onClick={() => this.selectSpecialty(specialty)}
                    >
                      <img src={SuitcaseIcon} alt="suitcase-icon" />
                      <p>{specialty}</p>
                    </div>
                  );
                })}
              </div>
              <div className="column">
                {specialties.slice(5).map((specialty) => {
                  return (
                    <div
                      className="specialty"
                      style={{
                        backgroundColor:
                          this.state.selectedSpecialty === specialty
                            ? "white"
                            : "transparent",
                      }}
                      onClick={() => this.selectSpecialty(specialty)}
                    >
                      <img src={SuitcaseIcon} alt="suitcase-icon" />
                      <p>{specialty}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {this.state.selectedSpecialty && (
              <div className="medics">
                {medics[this.state.selectedSpecialty].map((medic) => {
                  return (
                    <div
                      onClick={() => {
                        this.setState({ showDoctor: true });
                      }}
                    >
                      <SearchResult
                        image={DoctorIcon}
                        name={medic.name}
                        rating={medic.rating}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ClinicPopup;
