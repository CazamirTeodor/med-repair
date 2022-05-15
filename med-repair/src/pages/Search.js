import React from "react";
import { Link } from "react-router-dom";
import medlogo from "../assets/images/logo.png";
import DropdownList from "../components/DropdownList";
import Arrow from "../assets/images/arrow.png";
import SearchResult from "../components/SearchResult";
import DoctorIcon from "../assets/images/surgeon-doctor.png";
import ClinicIcon from "../assets/images/clinic.jpeg";
import "./Search.css";
import MedicPopup from "../components/MedicPopup";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPopup: false
    };
  }

  togglePopup = () => {
    console.log("togglePopup");
    this.setState({ displayPopup: !this.state.displayPopup });
  }

  render() {
    let specialties = [
      "Stomatologie",
      "Chirurgie",
      "Ortopedie",
      "Oftalmologie",
      "Pediatrie",
    ];
    let cities = [
      "Galați",
      "București",
      "Iași",
      "Cluj-Napoca",
      "Timișoara",
      "Craiova",
    ];
    let results = [
      {
        name: "Dr. Ion Popescu",
        rating: 3
      },
      {
        name: "Dr. Ion Popescu",
        rating: 4
      },
      {
        name: "Dr. Ion Popescu",
        rating: 5
      }
    ];


    return (
      <div className="search-page">
        {
          this.state.displayPopup &&
          <MedicPopup onClick={this.togglePopup}/>
        }
        <div className="page-wrapper">
          <Link className="logo" to="/">
            <img
              className="logo-picture"
              src={medlogo}
              alt="doctor pictogram"
            ></img>
          </Link>
          <p className="page-title">
            {this.props.type === "medics"
              ? "Completează formularul pentru a găsi medicul potrivit!"
              : "Completează formularul pentru a găsi clinica potrivită!"}
          </p>
          <form className="search-form">
            <input
              className="name"
              type="text"
              placeholder={
                this.props.type === "medics" ? "Nume și prenume" : "Denumire"
              }
            />
            <div className="dropdowns">
              <DropdownList default="Specialitate" options={specialties} />
              <DropdownList default="Județ" options={cities} />
            </div>
            <div className="intervals">
              <input type="number" placeholder="Preț min." />
              <div className="interval-separator"></div>
              <input type="number" placeholder="Preț max." />

              <input type="date" placeholder="Începând cu" />
              <div className="interval-separator"></div>
              <input type="date" placeholder="Până la" />
            </div>
            <div className="delete-filters-button">
              <p>Șterge filtrele</p>
            </div>
          </form>
          <div className="search-results">
            <div className="search-count">
              <text>Am găsit </text>
              <b>{results.length}</b>
              <text> rezultate:</text>
            </div>
            <div className="sort-filters">
              <p className="sort-text">Sortează:</p>
              <div className="sort-button">
                <p>Dată</p>
                <img src={Arrow} />
              </div>
              <div className="sort-button">
                <p>Preț</p>
                <img src={Arrow} />
              </div>
              <div className="sort-button">
                <p>Rating</p>
                <img src={Arrow} />
              </div>
            </div>
            <div className="search-results-list">
              {results.map((result) => (
                <SearchResult
                  onClick={this.togglePopup}
                  name={result.name}
                  image={this.props.type === "medics" ? DoctorIcon : ClinicIcon}
                  rating={result.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
