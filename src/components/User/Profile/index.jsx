import { listFriends, listPhotos } from "contants/profile";
import CardIntro from "./CardIntro";
import CardPhotos from "./CardPhotos";
import CardTyping from "./CardTyping";
import CardPost from "./CardPost";
import { posts } from "contants/posts";

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
          <div className="wrapper">
            <CardTyping />
            {posts.map((post) => (
              <CardPost
                title={post.title}
                body={post.body}
                image={post.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
