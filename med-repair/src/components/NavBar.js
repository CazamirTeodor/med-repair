import React from "react";
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
              <p onClick={() => this.setState({ activePage: "profile" })}>
                Profilul meu
              </p>
            </div>
          </div>
        ) : null}

        <div className="right">
          <p onClick={() => this.setState({ activePage: "medics" })}>Medici</p>
          <p onClick={() => this.setState({ activePage: "clinics" })}>
            Clinici
          </p>
          <div className="filled-btn">
            {this.state.authenticated ? (
              <p>Deautentificare</p>
            ) : (
              <p>Autentificare</p>
            )}
          </div>
        </div>
        
      </div>
    );
  }
}

export default NavBar;
