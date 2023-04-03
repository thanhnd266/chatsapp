import { listFriends, listPhotos } from "contants/profile";
import CardIntro from "./CardIntro";
import CardPhotos from "./CardPhotos";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-wrapper">
        <div className="profile-left">
          <CardIntro />
          <CardPhotos listPhotos={listPhotos} title="Photos" />
          <CardPhotos listPhotos={listFriends} title="Friends" />
        </div>
        <div className="profile-right">
          <div className="wrapper"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
