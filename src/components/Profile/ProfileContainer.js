import { useContext } from "react";
import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  changeShowName,
  CHANGE_NAME,
  changeName,
} from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { ThemeContext } from "../../utils/ThemeContext";
import { usePrev } from "../../utils/usePrev";
import { FormMui } from "../FormMui";
import { Profile } from "./Profile";

export const ProfileContainer = () => {
  const { setMessageColor } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const showName = useSelector(selectShowName, shallowEqual);
  const name = useSelector(selectName);

  const handleChangeShowName = () => {
    dispatch(changeShowName);
  };

  const handleClick = () => {
    setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
  };

  const handleChangeName = (text) => {
    dispatch(changeName(text));
  };

const ProfileToConnect = ({ showName, name, setName, setShowName }) => {
  const { setMessageColor } = useContext(ThemeContext);

  const handleChangeShowName = () => {

    setShowName();
  };

  const handleClick = () => {
    setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
  };

  const prevShowName = usePrev(showName);

  console.log(prevShowName, showName);

  const handleChangeName = (text) => {

    setName(text);
  };

 

const mapStateToProps = (state) => ({
  showName: selectShowName(state),
  name: selectName(state),
});

const mapDispatchToProps = {
  setShowName: () => changeShowName,
  setName: changeName,
};

const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileToConnect);
};


return (
  <>
     <Profile
      handleClick={handleClick}
      handleChangeShowName={handleChangeShowName}
      handleChangeName={handleChangeName}
      />
 
  </>
);

};