import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "home",
      authenticated: false,
    };
  }
  render() {
    return (
      <div className="navbar">
        {this.state.authenticated ? (
          <div className="left">
            <div className="filled-btn">
              <p onClick={() => <Redirect to="/login"/>}>
                Profilul meu
              </p>
            </div>
          </div>
        ) : null}

        <div className="right">
          <p onClick={() => this.props.history.push("/medics")}>Medici</p>
          <p onClick={() => this.props.history.push("/clinics")}>
            Clinici
          </p>
          <div className="filled-btn">
            {this.state.authenticated ? (

              <p onClick={() => this.props.history.push("/landing")}>Deautentificare</p>
            ) : (
              <p onClick={() => this.props.history.push("/login")}>Autentificare</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
