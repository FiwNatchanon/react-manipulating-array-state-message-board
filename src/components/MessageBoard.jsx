import { useState } from "react";
import MessageCard from "./MessageCard";

function MessageBoard() {
  const [messageText, setMessageText] = useState("")
  const [messages, setMessages] = useState([])

  function handleTextInput(e) {
    setMessageText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (messageText.trim() === "") {
      return;
    };

    setMessages([...messages, messageText]);
    setMessageText("")
  }

  function handleDeleteMessage(index) {
    const newMessages = messages.filter((item, messageIndex) => messageIndex !== index );

    setMessages(newMessages);
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form class="message-input-container" onSubmit={handleSubmit}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageText}
            onChange={handleTextInput}
          />
        </label>
        <button className="submit-message-button" type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      <div class="board">
        {messages.map((message, index) => {
          return < MessageCard key={index} message={message} onDelete={() => handleDeleteMessage(index)}/>
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
