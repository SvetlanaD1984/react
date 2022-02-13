import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import App from "../../App";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import { Profile } from "../Profile";

const Home = () => <h2>Home page</h2>;

export const Router = () => {
  return (
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
        <Route path="chats" element={<ChatList />}>
          <Route path=":chatId" element={<Chat />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};