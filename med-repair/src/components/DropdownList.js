import React from "react";
import DropdownIcon from "../assets/images/dropdown-icon-b.png";
import "./DropdownList.css";

class DropdownList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      selectedOption: this.props.default,
    };
  }

  setOption = (option) => {
    this.setState({
      show: false,
      selectedOption: option,
    });
  };

  toggleSelect = (_) => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="dropdown" onClick={this.toggleSelect}>
        <div className="chosen-option">
          <p>{this.state.selectedOption}</p>
        </div>
        <div
          className="all-options"
          style={
            this.state.show
              ? {
                  width: "100%",
                  maxHeight: "300px",
                  border: "1px solid black",
                }
              : {
                  width: "0%",
                  maxHeight: "0px",
                  border: "none",
                }
          }
        >
          {this.props.options.map((option, index) => {
            return (
              <p
                className="option"
                onClick={() => this.setOption(option)}
                key={index}
                style={
            this.state.show
              ? {
                  opacity: "1",
                }
              : {
                  opacity: "0",
                }
          }
              >
                {option}
              </p>
            );
          })}
        </div>
        <img src={DropdownIcon} className="dropdown-icon" alt="dropdown-icon" />
      </div>
    );
  }
}

export default DropdownList;
