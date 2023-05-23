import { Button, Divider, Form, Input, Select } from "antd";
import BaseModal from "@/components/BaseModal";
import { useEffect, useRef, useState } from "react";
import {
  AvatarCard,
  FooterStyled,
  ImagePreview,
  ImagePreviewWrapper,
  ModalPostContent,
} from "./styled";
import React from "react";
import { convertHtmlToText } from "@/utils/helpers";
import axiosClient from "@/config/axios";
import Loading from "@/components/loading/Loading";
import Toast from "@/components/Toast";

const ModalPost = ({ currentUser, postId, public_status, body, images, setMutatePosts, ...props }) => {
  const [listImagePreview, setListImagePreview] = useState([]);
  const [listFileImage, setListFileImage] = useState([]);
  const [valueInputField, setValueInputField] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenToast, setIsOpenToast] = useState(false);
  const [toastStatus, setToastStatus] = useState(null);
  const [textToast, setTextToast] = useState("");

  const fileImageRef = useRef();

  const [openEmoji, setOpenEmoji] = useState(false);
  const emojiEl = useRef();
  const iconEl = useRef();
  const bundleEmoji = useRef();
  const inputEl = useRef();

  useEffect(() => {
    if (images?.length > 0) {
      setListFileImage(prev => [...prev, ...images])
      setListImagePreview(prev => [...prev, ...images]);
    }
    if(body && inputEl?.current) {
      inputEl.current.innerHTML = body;
    }
  }, [])

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

  const handleOpenEmoji = () => {
    if (!openEmoji) {
      setOpenEmoji(true);
    } else {
      setOpenEmoji(false);
    }
  };

  const handleSubmitPost = async (value) => {
    let formData = new FormData();
    setIsLoading(true);

    let data = {};
    data.availableImg = [];

    listFileImage.forEach((el) => {
      if(typeof el === "string" && el.includes("https://res.cloudinary.com/")) {
        data.availableImg.push(el);
      } else {
        formData.append(`image-${currentUser._id}`, el);
      }
    });

    data = {
      ...data,
      ...value,
      userId: currentUser._id,
      content: convertHtmlToText(inputEl.current.innerHTML),
    };

    formData.append("payload", JSON.stringify(data));

    try {
      const res = await axiosClient.post(`${postId ? `/posts/update/${postId}` : "/posts/create"}`, formData);
      if (res.status_code === 200) {
        props.onCancel();
        setMutatePosts(prev => !prev);
        setIsLoading(false);
        setListImagePreview([]);
        setListFileImage([]);
        inputEl.current.innerHTML = "";
        handleOpenToast();
        setTextToast("Create post successfully!");
        setToastStatus("success");
      }
    } catch (err) {
      handleOpenToast()
      setToastStatus("error");
      setTextToast(err.message);
      console.log(err);
      setIsLoading(false);
    }
  };

  const handleOpenToast = () => {
    setIsOpenToast(true);
    setTimeout(() => {
      setIsOpenToast(false);
    }, 3500)
  }

  const handleSelectFile = (e) => {
    e.preventDefault();
    fileImageRef.current.click();
  };

  const handleOnChangeImg = (e) => {
    e.preventDefault();

    let listFile = [...e.target.files];

    listFile.forEach((el) => {
      const urlImage = URL.createObjectURL(el);
      setListFileImage((prev) => [...prev, el]);
      setListImagePreview((prev) => [...prev, urlImage]);
    });
  };

  const handleRemovePreviewImg = (e) => {
    e.preventDefault();
    setListImagePreview([]);
    setListFileImage([]);
  };

  const handleFocusInputField = (e) => {
    const value = convertHtmlToText(e.target.innerHTML);
    if (value) {
      setValueInputField(true);
    } else {
      setValueInputField(false);
    }
  };

  return (
    <>
      <BaseModal title="Create Post" width="600px" footer={null} {...props}>
        <ModalPostContent
          onFinish={handleSubmitPost}
          initialValues={{
            ["public_status"]: public_status || "public",
          }}
        >
          <div className="modal-avatar">
            <AvatarCard src={currentUser.profilePicture} />
            <div className="modal-avatar__info">
              <h6>{currentUser.username}</h6>
              <Form.Item name="public_status">
                <Select
                  style={{
                    width: 100,
                  }}
                  bordered={false}
                  options={[
                    {
                      value: "public",
                      label: (
                        <div>
                          <i className="fa-solid fa-earth-americas"></i>{" "}
                          <span style={{ marginLeft: "2px" }}>Public</span>
                        </div>
                      ),
                    },
                    {
                      value: "friends",
                      label: (
                        <div>
                          <i className="fa-solid fa-user"></i>{" "}
                          <span style={{ marginLeft: "2px" }}>Friends</span>
                        </div>
                      ),
                    },
                    {
                      value: "private",
                      label: (
                        <div>
                          <i className="fa-solid fa-lock"></i>{" "}
                          <span style={{ marginLeft: "2px" }}>Private</span>
                        </div>
                      ),
                    },
                  ]}
                />
              </Form.Item>
            </div>
          </div>
          <div className="modal-main">
            <Form.Item name="textContent">
              <div
                className="post-input"
                contentEditable="true"
                suppressContentEditableWarning={true}
                data-placeholder="What's your mind?..."
                onInput={(e) => handleFocusInputField(e)}
                ref={inputEl}
              ></div>
            </Form.Item>
            {listImagePreview.length > 0 && (
              <ImagePreview>
                <ImagePreviewWrapper
                  numberItemPerRow={
                    listImagePreview.length < 3 ? listImagePreview.length : 3
                  }
                >
                  {listImagePreview.map((el, index) => {
                    return (
                      <div className="image-preview__item" key={index}>
                        <img
                          src={el}
                          alt=""
                          multiple="multiple"
                          accept="image/png, image/gif, image/jpeg"
                        />
                      </div>
                    );
                  })}
                </ImagePreviewWrapper>
                <div
                  className="delete-img"
                  onClick={(e) => handleRemovePreviewImg(e)}
                >
                  <span>
                    <i className="fa-sharp fa-regular fa-circle-xmark"></i>
                  </span>
                </div>
              </ImagePreview>
            )}

            <div className="modal-utils">
              <div className="upload-img">
                <input
                  ref={fileImageRef}
                  type="file"
                  onChange={(e) => handleOnChangeImg(e)}
                  multiple="multiple"
                  accept="image/png, image/gif, image/jpeg, image/jpg"
                  hidden
                />
                <span
                  className="upload-icon"
                  onClick={(e) => handleSelectFile(e)}
                >
                  <i className="fa-solid fa-image"></i>
                </span>
              </div>

              <div className="emoji">
                {openEmoji ? (
                  <span onClick={handleOpenEmoji} ref={emojiEl}>
                    <i ref={iconEl} className="fa-solid fa-face-smile"></i>
                  </span>
                ) : (
                  <span onClick={handleOpenEmoji} ref={emojiEl}>
                    <i ref={iconEl} className="fa-regular fa-face-smile"></i>
                  </span>
                )}

                {openEmoji && (
                  <div className="bundle-emoji">
                    <emoji-picker ref={bundleEmoji}></emoji-picker>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Divider />

          <FooterStyled
            existValue={
              body || valueInputField || listFileImage.length > 0 ? true : false
            }
          >
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Button block htmlType="submit">
                {isLoading ? (
                  <span>
                    <Loading size={18} />
                  </span>
                ) : (
                  <span>
                    {postId ? "Update" : "Post"}
                  </span>
                )}
              </Button>
            </Form.Item>
          </FooterStyled>
        </ModalPostContent>
      </BaseModal>
      {isOpenToast && <Toast toastStatus={toastStatus} text={textToast} />}
    </>
  );
};
export default ModalPost;
