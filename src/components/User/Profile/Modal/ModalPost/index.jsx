import { Button, Divider, Form, Select } from "antd";
import BaseModal from "@/components/BaseModal";
import { useEffect, useRef, useState } from "react";
import {
  AvatarCard,
  ImagePreview,
  ImagePreviewWrapper,
  ModalPostContent,
} from "./styled";
import React from "react";

const ModalPost = ({ ...props }) => {
  // const [confirmLoading, setConfirmLoading] = useState(false);
  const [listImagePreview, setListImagePreview] = useState([]);
  const [listFileImage, setListFileImage] = useState([]);
  const fileImageRef = useRef();

  const [openEmoji, setOpenEmoji] = useState(false);
  const emojiEl = useRef();
  const iconEl = useRef();
  const bundleEmoji = useRef();
  const inputEl = useRef();

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
    console.log(value);
    let result = value;
    result.textContent = inputEl.current.innerHTML;
    result.image = [...listFileImage];
    console.log(result);
  };

  // const onPreview = async (file) => {
  //   let src = file.url;
  //   if (!src) {
  //     src = await new Promise((resolve) => {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file.originFileObj);
  //       reader.onload = () => resolve(reader.result);
  //     });
  //   }
  //   const image = new Image();
  //   image.src = src;
  //   const imgWindow = window.open(src);
  //   imgWindow?.document.write(image.outerHTML);
  // };

  const handleSelectFile = (e) => {
    e.preventDefault();
    fileImageRef.current.click();
  };

  const handleOnChangeImg = (e) => {
    e.preventDefault();
    const urlImage = URL.createObjectURL(e.target.files[0]);
    setListFileImage((prev) => [...prev, e.target.files[0]]);
    setListImagePreview((prev) => [...prev, urlImage]);
  };

  return (
    <>
      <BaseModal title="Create Post" width="600px" footer={null} {...props}>
        <ModalPostContent
          onFinish={handleSubmitPost}
          initialValues={{
            ["publicStatus"]: "public",
          }}
        >
          <div className="modal-avatar">
            <AvatarCard src="https://cdn-icons-png.flaticon.com/512/5556/5556512.png" />
            <div className="modal-avatar__info">
              <h6>Duy Thanh</h6>
              <Form.Item name="publicStatus">
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
              </ImagePreview>
            )}

            <div className="modal-utils">
              <div className="upload-img">
                <input
                  ref={fileImageRef}
                  type="file"
                  onChange={(e) => handleOnChangeImg(e)}
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

          <div className="modal-footer">
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Button block htmlType="submit">
                Post
              </Button>
            </Form.Item>
          </div>
        </ModalPostContent>
      </BaseModal>
    </>
  );
};
export default ModalPost;
