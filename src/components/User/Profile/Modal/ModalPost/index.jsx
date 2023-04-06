import { Select } from "antd";
import BaseModal from "components/BaseModal";
import { useEffect, useRef, useState } from "react";
import { AvatarCard, ModalPostContent } from "./styled";

const ModalPost = ({ ...props }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [openEmoji, setOpenEmoji] = useState(false);
  const emojiEl = useRef();
  const iconEl = useRef();
  const bundleEmoji = useRef();
  const inputEl = useRef();

  //   const handleOk = () => {
  //     setConfirmLoading(true);
  //     setTimeout(() => {
  //       setOpen(false);
  //       setConfirmLoading(false);
  //     }, 2000);
  //   };

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

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleSubmitMessage = async (e) => {
    console.log("hello teacher");
    inputEl.current.innerHTML = "";
  };

  return (
    <>
      <BaseModal title="Create Post" width="600px" {...props}>
        <ModalPostContent>
          <div className="modal-avatar">
            <AvatarCard src="https://cdn-icons-png.flaticon.com/512/5556/5556512.png" />
            <div className="modal-avatar__info">
              <h6>Duy Thanh</h6>
              <Select
                defaultValue="public"
                style={{
                  width: 100,
                }}
                bordered={false}
                onChange={handleChange}
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
            </div>
          </div>
          <div className="modal-main">
            <div
              onKeyDown={(e) =>
                e.keyCode === 13 ? handleSubmitMessage(e) : ""
              }
              className="post-input"
              contentEditable="true"
              suppressContentEditableWarning={true}
              data-placeholder="What's your mind?..."
              ref={inputEl}
            ></div>

            <div className="modal-utils">
              <div className="upload-img">
                <span>
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
        </ModalPostContent>
      </BaseModal>
    </>
  );
};
export default ModalPost;
