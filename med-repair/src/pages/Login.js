import React from "react";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
            loading: false
        };
    }

    render() {
        return (
            <div className="page">

            </div>
        );
    }
}

export default Login;