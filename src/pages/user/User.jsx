import BannerImage from "components/User/BannerImage";
import Profile from "components/User/Profile";
import UploadAvatar from "components/User/UploadAvatar";

const User = () => {
  return (
    <div className="user">
      <BannerImage />

      <Profile />

      {/* <div>
        <UploadAvatar />
      </div> */}
    </div>
  );
};

export default User;
