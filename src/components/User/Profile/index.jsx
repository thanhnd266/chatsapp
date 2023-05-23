import { listFriends, listPhotos } from "@/contants/profile";
import CardIntro from "./CardIntro";
import CardPhotos from "./CardPhotos";
import CardTyping from "./CardTyping";
import CardPost from "./CardPost";
import { ProfileStyled } from "./styled";
import { useEffect, useState } from "react";
import axiosClient from "@/config/axios";
import EmptyData from "@/components/EmptyData";

const Profile = ({ userPage }) => {
  const [posts, setPosts] = useState([]);
  const [mutatePosts, setMutatePosts] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axiosClient.post(`/posts/getList`, {
          limit: 10,
          page: 1,
          order: {
            createdAt: -1,
          },
          filter: {
            userId: userPage._id,
          }
        });
        if (res.status_code === 200) {
          setPosts(res.data.products);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, [mutatePosts]);

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
              <CardTyping currentUser={userPage} setMutatePosts={setMutatePosts} />
              {posts?.map((post) => {
                return (
                  <CardPost
                    currentUser={userPage}
                    post={post}
                    key={post._id}
                    setMutatePosts={setMutatePosts}
                  />
                );
              })}

              {posts.length === 0 && (
                <div style={{ marginTop: "80px" }}>
                  <EmptyData />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProfileStyled>
  );
};

export default Profile;
