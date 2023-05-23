import ModalConfirm from "@/components/ModalConfirm";
import axiosClient from "@/config/axios";
import { comments } from "@/contants/comment";
import { Image, Space } from "antd";
import { useEffect, useRef, useState } from "react";
import CommentComponent from "./CommentComponent";
import ModalPost from "./Modal/ModalPost";
import { CardContainer } from "./style/CardContainer.styled";
import {
  AvatarCard,
  ButtonStatus,
  CardPostBody,
  CardPostFooter,
  CardPostHeader,
  DropdownProperties,
} from "./style/CardPost.styled";
import TimeAgo from "@/components/timeAgo/TimeAgo";

const CardPost = ({ currentUser, post, setMutatePosts }) => {
  const [like, setLike] = useState(0);
  const [openEmoji, setOpenEmoji] = useState(false);
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [openModalPosting, setOpenModalPosting] = useState(false);

  const emojiEl = useRef();
  const iconEl = useRef();
  const bundleEmoji = useRef();
  const inputEl = useRef();

  useEffect(() => {
    post.likes?.forEach(el => {
      if(el.userId === currentUser._id) {
        setLike((prev) => (prev = !prev))
      }
    })
  }, [post.likes])

  useEffect(() => {
    window.onclick = (e) => {
      if (
        e.target !== emojiEl.current &&
        e.target !== iconEl.current &&
        e.target !== bundleEmoji.current
      ) {
        setOpenEmoji(false);
      }
    };
  }, [openEmoji]);

  useEffect(() => {
    if (openEmoji) {
      bundleEmoji.current.addEventListener("emoji-click", (event) => {
        inputEl.current.innerHTML += event.detail.unicode;
      });
    }
  }, [openEmoji, inputEl.innerHTML]);

  const adjustHeight = (e) => {
    const el = e.target;
    if (el.scrollHeight > 110) {
      el.style.height = "110px";
    } else {
      el.style.height = "unset";
    }
  };

  const handleOpenEmoji = () => {
    if (!openEmoji) {
      setOpenEmoji(true);
    } else {
      setOpenEmoji(false);
    }
  };

  const handleSubmitMessage = async (e) => {
    inputEl.current.innerHTML = "";
  };

  const items = [
    {
      label: (
        <span onClick={() => setOpenModalPosting(true)}>
          <i className="fa-solid fa-pen-to-square"></i>
          Edit post
        </span>
      ),
      key: '0',
    },
    {
      label: (
        <span onClick={() => setOpenModalConfirm(true)}>
          <i className="fa-solid fa-trash-can"></i>
          Delete post
        </span>
      ),
      key: '1',
    },
  ];

  const handleDeletePost = async (postId) => {
    try {
      setConfirmLoading(true);

      const res = await axiosClient.post(`posts/delete/${postId}`);
      if (res.status_code === 200) {
        setTimeout(() => {
          setOpenModalConfirm(false);
          setConfirmLoading(false);
          setMutatePosts(prev => !prev);
        }, 1500);
      }
    } catch(err) {
      setTimeout(() => {
        setConfirmLoading(false);
      }, 1500);
      console.log(err);
    }
  }

  const handleLikePost = async () => {

    try {
      const res = await axiosClient.post(`posts/like/${post._id}`, {
        userId: currentUser._id,
      });

      if (res.status_code === 200) {
        setMutatePosts(prev => !prev);
      }

    } catch(err) {
      console.log(err);
    }
  }

  return (
    <CardContainer
      bordered={false}
      style={{
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <CardPostHeader>
        <div className="header-left">
          <AvatarCard src={currentUser.profilePicture} />
          <div className="header-info">
            <h6>{currentUser.username}</h6>
            {post.public_status === "public" && <i className="fa-solid fa-earth-americas"></i>}
            {post.public_status === "friends" && <i className="fa-solid fa-user"></i>}
            {post.public_status === "private" && <i className="fa-solid fa-lock"></i>}
            <span style={{ marginLeft: "6px" }}><TimeAgo timestamp={post.createdAt} /></span>
          </div>
        </div>
        <div className="header-right">
          <DropdownProperties
            menu={{
              items,
            }}
            trigger={['click']}
            placement="bottomRight"
            overlayClassName="card-post__dropdown"
          >
            <span onClick={(e) => e.preventDefault()}>
              <Space>
              <i className="fa-sharp fa-solid fa-ellipsis"></i>
              </Space>
            </span>
          </DropdownProperties>
        </div>
      </CardPostHeader>
      <CardPostBody>
        <p className="text-content">{post.content}</p>

        {post.image?.length > 0 &&
          post.image.map((img, index) => {
            return (
              <Image
                src={img}
                key={index}
              />
            );
          })}
      </CardPostBody>
      <CardPostFooter>
        <div className="statistic-like">
          {post.likes.length > 0 && (
            <img
              width={18}
              height={18}
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
              alt="like"
            />
          )}
          {post.likes.length > 0 && <span>{post.likes[0].username}</span>}
          {post.likes.length > 1 && <span>and {post.likes.length - 1} others</span>}
        </div>

        <div className="status-btn">
          <ButtonStatus
            className={like ? "status--btn__active" : ""}
            onClick={() => handleLikePost()}
          >
            {like ? (
              <i className="fa-solid fa-thumbs-up"></i>
            ) : (
              <i className="fa-regular fa-thumbs-up"></i>
            )}
            <span>Like</span>
          </ButtonStatus>
          <ButtonStatus>
            <i className="fa-regular fa-comment"></i>
            <span>Comment</span>
          </ButtonStatus>
          <ButtonStatus>
            <i className="fa-regular fa-share-from-square"></i>
            <span>Share</span>
          </ButtonStatus>
        </div>

        <div className="comment-section">
          <div className="comment-friends">
            {comments.map((comment) => {
              if (comment.postId === post._id) {
                return (
                  <CommentComponent
                    key={comment.id}
                    username={comment.username}
                    body={comment.body}
                    avatar={comment.avatar}
                  />
                );
              }
              return null;
            })}
          </div>

          <div className="card-avatar">
            <AvatarCard src={currentUser.profilePicture} />
            <div className="sending-cmt">
              {/* <Input placeholder="Write a comment..." /> */}
              <div className="comment-field">
                <div className="comment-box">
                  <div
                    onKeyUp={adjustHeight}
                    onKeyDown={(e) =>
                      e.keyCode === 13 ? handleSubmitMessage(e) : ""
                    }
                    className="comment-input"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    data-placeholder="Write a comment..."
                    ref={inputEl}
                  ></div>
                  <div className="comment-utils">
                    <div className="emoji">
                      {openEmoji ? (
                        <span onClick={handleOpenEmoji} ref={emojiEl}>
                          <i
                            ref={iconEl}
                            className="fa-solid fa-face-smile"
                          ></i>
                        </span>
                      ) : (
                        <span onClick={handleOpenEmoji} ref={emojiEl}>
                          <i
                            ref={iconEl}
                            className="fa-regular fa-face-smile"
                          ></i>
                        </span>
                      )}

                      {openEmoji && (
                        <div className="bundle-emoji">
                          <emoji-picker ref={bundleEmoji}></emoji-picker>
                        </div>
                      )}
                    </div>

                    <div className="upload-img">
                      <span>
                        <i className="fa-solid fa-image"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardPostFooter>

      <ModalConfirm 
        open={openModalConfirm}
        onCancel={() => setOpenModalConfirm(false)}
        onOk={() => handleDeletePost(post._id)}
        confirmLoading={confirmLoading}
        text="Are you sure to delete this post?"
      />
      {openModalPosting && (
          <ModalPost
            open={openModalPosting}
            onCancel={() => setOpenModalPosting(false)}
            currentUser={currentUser}
            postId={post._id}
            public_status={post.public_status}
            body={post.content} 
            images={post.image}
            setMutatePosts={setMutatePosts}
          />
      )}

    </CardContainer>
  );
};

export default CardPost;
