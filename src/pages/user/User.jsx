import BannerImage from "components/User/BannerImage";
import Profile from "components/User/Profile";
import UploadAvatar from "components/User/UploadAvatar";
import { UserStyled } from "./styled";

const User = () => {
  return (
    <UserStyled>
      <BannerImage />

      <Profile />

      {/* <div>
        <UploadAvatar />
      </div> */}
    </UserStyled>
  );
};

export default User;
