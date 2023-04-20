import { listFriends, listPhotos } from "@/contants/profile";
import CardIntro from "./CardIntro";
import CardPhotos from "./CardPhotos";
import CardTyping from "./CardTyping";
import CardPost from "./CardPost";
import { ProfileStyled } from "./styled";
import { useEffect, useState } from "react";
import axiosClient from "@/config/axios";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axiosClient.get(`/posts/${currentUser._id}`);
        if (res.status_code === 200) {
          setPosts(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getPosts();
  }, []);

  return (
    <ProfileStyled>
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
              {posts?.map((post) => {
                console.log(post);
                return (
                  <CardPost
                    title={post.title}
                    body={post.content}
                    images={post.image}
                    key={post._id}
                    postId={post._id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ProfileStyled>
  );
};

export default Profile;
