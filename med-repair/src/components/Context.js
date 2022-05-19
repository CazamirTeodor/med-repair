import React, { Component } from 'react';

export const Context = React.createContext();

class ContextProvider extends Component {
  // Context state
  state = {
    loggedIn: false
  };

  // Method to update state
  setData = (field_name, data) => {
    console.log('Last state:');
    console.log(this.state);
    console.log('Incomming data: ' + field_name);
    console.log(data);
    this.setState({
       [ field_name ] : data
    });
  }

  render() {
    const { children } = this.props;
    const state = this.state;
    const { setData } = this;

    return (
      <Context.Provider
        value={{
          state,
          setData,
        }}
      >
        {children}
      </Context.Provider>
    )
  }
}

export default Context;

export { ContextProvider };