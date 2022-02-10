import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";

import "./styles.css";

export const FormMUI = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  useEffect(() => {
    textField.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <TextField className = "myTxtField" value={value} onChange={handleChange} />
      <Button className = "myBtn">Send</Button>
    </form>
  );
};