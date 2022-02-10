import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Message } from "./components/Message";
import { ChatList } from "./components/ChatList";
import { AUTHORS } from "./utils/constants";
import { MessageList } from "./components/MessageList";
import { FormMUI } from "./components/FormMUI";

const chats = [
  { name: "Chat1", id: "1" },
  { name: "Chat2", id: "2" },
];

function App() {
  const [messageList, setMessageList] = useState([]);
  const messagesEnd = useRef();

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  };

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
      timeout = setTimeout(() => {
        sendMessage("still here", AUTHORS.BOT);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [messageList]);

  useEffect(() => {
    console.log(messagesEnd);
  }, []);

  return (
    <div className="App">
      <ChatList />
      <div>
        <div className="App-content">
          <MessageList messages={messageList} />
          <div ref={messagesEnd} />
        </div>
        <FormMUI onSubmit={handleAddMessage} />
      </div>
    </div>
  );
}

export default App;

console.log(<div>Example</div>);
