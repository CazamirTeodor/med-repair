import React from "react";

function Chat(props) {
  const { openChat, setOpenChat } = props;

  console.log(openChat);

  const handleCloseChat = () => {
    setOpenChat(false);
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
        <div className="send-button">Trimite!</div>
      </div>
    </div>
  );
}

export default Chat;
