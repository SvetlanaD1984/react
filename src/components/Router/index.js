import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import App from "../../App";
import { addChat, deleteChat } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import { addMessage } from "../../store/messages/actions";
import { selectMessages } from "../../store/messages/selectors";
import { ThemeContext } from "../../utils/ThemeContext";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import ConnectedProfile, { ProfileContainer } from "../Profile/ProfileContainer";

const Home = () => <h2>Home page</h2>;

export const Router = () => {
  const [messageColor, setMessageColor] = useState("red");

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
          <Route path="chats" element={<ChatList />}>
            <Route path=":chatId" element={<Chat />} />
          </Route>
          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};