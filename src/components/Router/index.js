import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { ThemeContext } from "../../utils/ThemeContext";
import { Articles } from "../Articles/Articles";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";

import ConnectedProfile from "../Profile";

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
            to="/articles"
          >
            articles
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
          <Route path="/articles" element={<Articles />} />
          <Route path="chats" element={<ChatList />}>
            <Route path=":chatId" element={<Chat />} />
          </Route>
          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};