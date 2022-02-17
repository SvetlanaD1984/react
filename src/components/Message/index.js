import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { ThemeContext } from "../../utils/ThemeContext";

export const Message = ({ text, author }) => {
  const { messageColor } = useContext(ThemeContext);
  return (
    <div>
      <span style={{ color: messageColor }}>
        {author}: {text}
      </span>
    </div>
  );
};
