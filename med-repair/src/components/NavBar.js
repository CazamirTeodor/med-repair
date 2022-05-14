import React from 'react';

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activePage: "home",
            authenticated: false
        }
    }
    render(){

        return (
            <div className="navbar">
                {this.state.authenticated ? <div>
                    <a href="#" onClick={() => this.setState({activePage: "home"})}>Home</a>
                    <a href="#" onClick={() => this.setState({activePage: "profile"})}>Profile</a>
                    <a href="#" onClick={() => this.setState({activePage: "logout"})}>Logout</a>
                </div> : <div>
                    <a href="#" onClick={() => this.setState({activePage: "login"})}>Login</a>
                    <a href="#" onClick={() => this.setState({activePage: "register"})}>Register</a>
                </div>}
            </div>
        )
    }
}

export default NavBar;