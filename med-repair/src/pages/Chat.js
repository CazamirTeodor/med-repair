import React from "react";

const doctor_messages = [
  "Simptomele tale sunt asemanatoare bolii CoVID-19. Recomandarea mea este să anunţi autorităţile pentru a fi testat!",
];

let user_messages = [];

function Chat(props) {
  const { openChat, setOpenChat } = props;

  const handleCloseChat = () => {
    setOpenChat(false);
  };

  const handleSendMessageButton = (new_message) => {
    if (new_message.length === 0 || new_message === null) return;

    user_messages.push(new_message);
  };

  return (
    <div
      className="chat-window"
      style={{ display: openChat ? "block" : "none" }}
    >
      <div className="chat-bar">
        <div className="chat-bar-text">Medicul meu virtual</div>
        <div className="doctor_status"></div>
        <div className="exit-button" onClick={() => handleCloseChat()}></div>
      </div>
      <div className="chat-description">Descrie-mi problema ta!</div>
      <div className="messages-section"></div>
      <div className="message-input">
        <textarea className="textarea"></textarea>
        <div className="send-button">
          <div className="send-button-text">Trimite!</div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
