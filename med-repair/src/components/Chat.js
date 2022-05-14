import React from "react";
import BotIcon from "../assets/images/bot.png";
import UserIcon from "../assets/images/user.jpeg";
import "./Chat.css";

const doctor_messages = [
  {
    message:
      "Simptomele tale sunt asemanatoare bolii CoVID-19. Recomandarea mea este să anunţi autorităţile pentru a fi testat!",
    sender: "doctor",
  },
  { message: "Am nevoie de mai multe detalii!", sender: "doctor" },
];

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: "",
      user: "",
      doctor: "",
      error: "",
      loading: false,
    };
  }

  inputHandler = (event) => {
    this.setState({ message: event.target.value });
  };

  componentDidUpdate() {
    var messages_section = document.querySelector(".messages-section");
    messages_section.scrollTop = messages_section.scrollHeight;
  }

  messageSent = (e) => {
    e.preventDefault();

    if (this.state.message === "")
      return;

    var messages = this.state.messages;
    messages.push({ message: this.state.message, sender: "user" });
    this.setState({ messages: messages, message: "" });
    setTimeout(() => {
      this.setState({ loading: true });
      setTimeout(() => {
        let message = doctor_messages.pop();
        if (message) messages.push(message);
        this.setState({ loading: false });
      }, 2000);
    }, 1000);
  };

  render() {
    return (
      <div
        className="chat-window"
        style={{ height: this.props.openChat ? "350px" : "35px" }}
      >
        <div className="chat-bar" onClick={this.props.setOpenChat}>
          <p>Medicul meu virtual</p>
          <div className="doctor_status"></div>
        </div>

        <div className="messages-section">
          <p className="banner">Descrie-mi problema ta!</p>
          {this.state.messages.map((message, index) => {
            if (message.sender === "user") {
              return (
                <div className="message">
                  <img className="user-icon" src={UserIcon} alt="user-icon" />
                  <div className="user-message" key={index}>
                    <p>{message.message}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="message">
                  <img className="bot-icon" src={BotIcon} alt="bot-icon" />
                  <div className="doctor-message" key={index}>
                    <p>{message.message}</p>
                  </div>
                </div>
              );
            }
          })}
          {this.state.loading && (
            <div className="message">
              <img className="bot-icon" src={BotIcon} alt="bot-icon" />
              <div className="loading">
                <div className="dot first" />
                <div className="dot second" />
                <div className="dot third" />
              </div>
            </div>
          )}
        </div>
        <form onSubmit={this.messageSent} className="message-input">
          <input
            onChange={this.inputHandler}
            value={this.state.message}
            placeholder={"Mesaj..."}
            className="message"
          ></input>
          <button type="submit" className="send-button">
            <p>Trimite!</p>
          </button>
        </form>
      </div>
    );
  }
}

export default Chat;
