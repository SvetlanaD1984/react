import { useContext } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShowName, CHANGE_NAME } from "../../store/profile/actions";
import { ThemeContext } from "../../utils/ThemeContext";
import { FormMui } from "../FormMui";
import { useCallback } from "react";
import { store } from "../../store/index";
import { toggleShowName } from "../../store/profile/actions";


export const Profile = () => {
  const { setMessageColor } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const { showName, name } = useSelector((state) => state);

  const handleChangeShowName = () => {
    dispatch(changeShowName);
  };

  const handleClick = () => {
    setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
  };

  const handleChangeName = (text) => {
    dispatch({
      type: CHANGE_NAME,
      payload: text,
    });
  };

 const setShowName = useCallback(() => {
    dispatch(toggleShowName);
  }, [dispatch]);


  return (
    <>
      <h3>Profile</h3>
      <div>
        <button onClick={handleClick}>Change theme</button>
      </div>
      <div>
        {showName && <span>{name}</span>}
        <input
          type="checkbox"
          checked={showName}
          value={showName}
          onChange={setShowName}
        />
        <span>Show Name</span>
        {showName && <div>{name}</div>}

        <button prop type="submit" onClick={handleChangeShowName}>
          Change show name
        </button>
      </div>
      <FormMui onSubmit={handleChangeName} />
    </>
  );
};
