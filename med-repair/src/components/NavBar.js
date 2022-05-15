import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "home",
      authenticated: true,
    };
  }
  render() {
    return (
      <div className="navbar">
        {this.state.authenticated ? (
          <div className="left">
            <div className="filled-btn">
              <Link to={"/my-profile"}>Profilul meu</Link>
            </div>
          </div>
        ) : null}

        <div className="right">
          <Link to={"/medics"}>Medici</Link>
          <Link to={"/clinics"}>Clinici</Link>
          <div className="filled-btn">
            {this.state.authenticated ? (
              <Link to={"/login"}>
                Deautentificare
              </Link>
            ) : (
              <Link to={"/login"}>
                Autentificare
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
