import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import App from "../../App";
import { addChat, deleteChat } from "../../store/chats/actions";
import { ThemeContext } from "../../utils/ThemeContext";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import ConnectedProfile, { Profile } from "../Profile";
import { selectMessages } from "../../store/messages/selectors";
import { selectChats } from "../../store/chats/selectors";

const Home = () => <h2>Home page</h2>;

const inititalChats = [
  {
    name: "Chat 1",
    id: "chat1",
  },
  {
    name: "Chat 2",
    id: "chat2",
  },
  {
    name: "Chat 3",
    id: "chat3",
  },
];

const initialMessages = inititalChats.reduce((acc, el) => {
  acc[el.id] = [];
  return acc;
}, {});

export const Router = () => {
  const [messageColor, setMessageColor] = useState("red");
 
 const messages = useSelector(selectMessages);

  const chatList = useSelector(selectChats);
   
  const dispatch = useDispatch();

  const handleAddMessage = (chatId, newMsg) => {
    dispatch(addChat(chatId, newMsg));
  };

  const handleAddChat = (newChatName) => {
    const newId = `chat-${Date.now()}`;
    dispatch(addChat(newId, newChatName));
    
  };

  const handleDeleteChat = (idToDelete) => {
    dispatch(deleteChat(idToDelete));
  };

  const contextValue = {
    messageColor,
    setMessageColor,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <BrowserRouter>
        <div>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
          >
            home
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
            to="/chats"
          >
            chats
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
            to="/profile"
          >
            profile
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ConnectedProfile />} />
          <Route
            path="chats"
            element={
              <ChatList
                onDeleteChat={handleDeleteChat}
                onAddChat={handleAddChat}
                chats={chatList}
              />
            }
          >
            <Route
              path=":chatId"
              element={
                <Chat messages={messages} addMessage={handleAddMessage} />
              }
            />
          </Route>
          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};
