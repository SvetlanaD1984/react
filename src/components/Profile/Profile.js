import { FormMui } from "../FormMui";
import { showName } from "./ProfileContainer";
import { ConnectedProfile } from "./ProfileContainer";

export const Profile = ({ handleClick, handleChangeShowName, handleChangeName }) => (
    <>
     <h3>Profile</h3>
    <div>
      <button onClick={handleClick}>Change theme</button>
    </div>
    <div>
      {showName }
      <input type="checkbox" />
      <button onClick={handleChangeShowName}>Change show name</button>
    </div>
    <FormMui onSubmit={handleChangeName} />
    </>
);
