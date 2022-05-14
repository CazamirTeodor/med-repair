import React from "react";

export default function Chat() {
  return (
    <div className="chat-window">
      <div className="chat-bar">
        <div className="chat-bar-text">Medicul meu virtual</div>
        <div className="chat-status"></div>
      </div>
      <div className="chat-description"> Descrie-mi problema ta!</div>
      <div className="messages-section"></div>
    </div>
  );
}
