import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Context from "../components/Context";

class NavBar extends React.Component {
  static contextType = Context;
  logout = () => {
    this.context.setData("loggedIn", false);
  }

  render() {
    return (
      <Context.Consumer>
        {(context) => {
          return (
            <div className="navbar">
              {context.state.loggedIn ? (
                <div className="left">
                  <div className="filled-btn">
                    <Link to={"/my-profile"}>Profilul meu</Link>
                  </div>
                </div>
              ) : null}

              <div className="right">
                <Link to={"/medics"}>Medici</Link>
                <Link to={"/clinics"}>Clinici</Link>
                <div className="filled-btn" onClick={this.logout}>
                  {context.state.loggedIn ? (
                    <Link to={"/"}>Deautentificare</Link>
                  ) : (
                    <Link to={"/login"}>Autentificare</Link>
                  )}
                </div>
              </div>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default NavBar;
