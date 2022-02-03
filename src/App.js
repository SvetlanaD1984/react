import React, { useState } from "react";
import "./App.css";
import { Message } from "./components/Message";
import { Form } from "./components/Form";
import { useEffect } from "react/cjs/react.development";
import { AUTHORS } from "./utils/constants";
import { MessageList } from "./components/MessageList";

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  };

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
  };

  useEffect(() => {
    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
      timeout = setTimeout(() => {
        sendMessage("still here", AUTHORS.BOT);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [messageList]);

  return (
    <div className="App">
      <div className="App-content">
        <MessageList messages={messageList} />
      </div>
      <Form onSubmit={handleAddMessage} />
    </div>
  );
}

export default App;
