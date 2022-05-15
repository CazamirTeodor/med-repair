import React, { useState } from "react";

import "./MyProfile.css";
import medlogo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

let history = [
  {
    date: "23.01.2021",
    hour: "16:00",
    hospital: "Medicus Center",
    doctor: "Vasilescu Matei",
    section: "Cardiologie",
    about: "Control rutină",
    price: "200 RON",
  },
  {
    date: "15.01.2021",
    hour: "18:00",
    hospital: "Medicus Center",
    doctor: "Popescu Valentin",
    section: "Stomatologie",
    about: "Tratament carie",
    price: "150 RON",
  },
  {
    date: "01.01.2021",
    hour: "14:00",
    hospital: "MedLife",
    doctor: "Radu Radon",
    section: "Dermatologie",
    about: "Control rutină",
    price: "250 RON",
  },
];

export default function MyProfile() {
  const [userDetails, setuserDetails] = useState({
    surname: "Cazamir",
    name: "Teodor",
    sex: "Masculin",
    blood: "B3 -",
    weight: "95 KG",
    height: "179 CM",
    address: "Zimbabwe, Str. Alunistilor 10",
    serie: "FL 392402",
    id: "894812039",
  });

  const [disease, setdisease] = useState([
    {
      name: "Dermatita",
      type: "Consult",
    },
    {
      name: "Gingivita",
      type: "Consult",
    },
  ]);

  const [consult, setConsult] = useState({
    last: "23 ianuarie 2021",
    next: "2 aprilie 2023",
  });
  return (
    <div className="page myprofile-page">
      <Link className="logo" to="/">
        <img
          className="logo-picture"
          src={medlogo}
          alt="doctor pictogram"
        ></img>
      </Link>

      <div className="profile-window">
        <div className="user-details">
          <div className="user-name">
            {userDetails.surname + " " + userDetails.name}
          </div>
          <div className="user-id">{userDetails.id}</div>
        </div>
        <div className="user-personal-data">
          <div className="tab-description">Datele mele</div>
          <div className="tab-data">
            <table className="user-tab-details">
              <tr>
                <td className="key">CNP:</td>
                <td className="value"> {userDetails.id}</td>
              </tr>
              <tr>
                <td className="key">Serie: </td>
                <td className="value"> {userDetails.serie}</td>
              </tr>
              <tr>
                <td className="key">Domiciliu: </td>
                <td className="value"> {userDetails.address}</td>
              </tr>
            </table>
            <table className="user-tab-details">
              <tr>
                <td className="key">Nume:</td>
                <td className="value"> {userDetails.name}</td>
              </tr>
              <tr>
                <td className="key">Prenume:</td>
                <td className="value"> {userDetails.surname}</td>
              </tr>
              <tr>
                <td className="key">Sex:</td>
                <td className="value"> {userDetails.sex}</td>
              </tr>
            </table>
            <table className="user-tab-details">
              <tr>
                <td
                  className="key"
                  style={{
                    color: "rgb(0, 116, 161)",
                  }}
                >
                  Grupa Sangvina:
                </td>
                <td
                  className="value"
                  style={{
                    color: "rgb(0, 116, 161)",
                  }}
                >
                  {" "}
                  {userDetails.blood}
                </td>
              </tr>
              <tr>
                <td className="key">Greutate:</td>
                <td className="value"> {userDetails.weight}</td>
              </tr>
              <tr>
                <td className="key">Înălţime:</td>
                <td className="value"> {userDetails.height}</td>
              </tr>
            </table>
            <table className="user-tab-details">
              <tr className="afect">
                <td colSpan={2}>Afectiuni:</td>
              </tr>
              <tr>
                <td className="key"> {disease[0].name}:</td>
                <td
                  className="value"
                  style={{
                    color: "rgb(0, 116, 161)",
                  }}
                >
                  {disease[1].type}
                </td>
              </tr>
              <tr>
                <td className="key"> {disease[1].name}:</td>
                <td
                  className="value"
                  style={{
                    color: "rgb(0, 116, 161)",
                  }}
                >
                  {disease[0].type}
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="user-medical-data">
          <div className="tab-description">
            <div className="key">Data ultimului consult:</div>
            <div className="value"> {consult.last}</div>
          </div>
          <div className="tab-description">
            <div className="key">Data următorului consult:</div>
            <div className="value"> {consult.next}</div>
          </div>
          <div className="history">
            <div className="history-name"> Istoric consultaţii</div>
            <div className="history-details">
              <div className="key">Dată</div>
              <div className="key">Oră</div>
              <div className="key">Clinică</div>
              <div className="key">Medic</div>
              <div className="key">Specialitate</div>
              <div className="key">Descriere</div>
              <div className="key">Preţ</div>
            </div>
            {history.map((history_element, index) => {
              return (
                <div className="history-value" key={index}>
                  <div className="key">{history_element.date}</div>
                  <div className="key">{history_element.hour}</div>
                  <div
                    className="key"
                    style={{
                      color: "rgb(0, 116, 161)",
                    }}
                  >
                    {history_element.hospital}
                  </div>
                  <div
                    className="key"
                    style={{
                      color: "rgb(0, 116, 161)",
                    }}
                  >
                    {history_element.doctor}
                  </div>
                  <div className="key">{history_element.section}</div>
                  <div className="key">{history_element.about}</div>
                  <div className="key">{history_element.price}</div>
                </div>
              );
            })}
            <div className="history-view-button"> Afişaţi mai mult </div>
          </div>
        </div>
      </div>
    </div>
  );
}
