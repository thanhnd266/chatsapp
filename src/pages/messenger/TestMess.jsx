import React, { useEffect, useState } from "react";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import TestChart from "./TestChart";
import { Link } from "react-router-dom";
import DOMPurify from 'dompurify';
import { MessageList } from "react-chat-engine-advanced";
import ReactDOM from 'react-dom';

const randomMessages = [
    "Hello! How are you?123123",
    "What's your favorite color?123123",
    "Did you watch the game last night?123123",
    "What's your favorite movie?123123",
    "Do you like programming?123123",
  ];
  
  const messageAddOn = [
    {
      attachments: [],
      createdAt: "2024-05-31 07:09:56.778403+00:00",
      custom_json: '{"sender_id":"1717139396778"}',
      id: 1026669,
      sender: {
        avatar:
          "https://api-chat-engine-io.s3.amazonaws.com/avatars/anh1_O4ddlT8.jpg?X-Amz",
        custom_json: "{}",
        first_name: "duy",
        is_online: true,
        last_name: "thanh",
        username: "duythanh",
      },
      sender_username: "duythanh",
      text: (
        <div>
            <Link to="https://google.com">Google</Link>
            <TestChart />
        </div>
      ),
    },
  ];

  const CustomMessageBubble = ({ props }) => {
    const { creds, chat, lastMessage, message, nextMessage } = props;
    const [localMessages, setLocalMessages] = useState([]);
    const [isFirstMessage, setIsFirstMessage] = useState(false);

    useEffect(() => {
      if (chat && localMessages.length === 0) {
        const initialMessages = message ? [message] : [];
        if(!isFirstMessage) {
            const randomMessages = [{
                id: `local-${Math.random()}`,
                sender_username: 'system',
                text: <TestChart />,
                custom_json: { html:  <TestChart /> },
                isJsx: true,
            }]
    
            setLocalMessages([...randomMessages, ...initialMessages]);
            setIsFirstMessage(true);
        }
      }
    }, []);

    const renderMessage = (msg) => {
        if(msg.isJsx) {
            return (
                <div>{msg.text}</div>
            )
        }

        return  (
            <div key={msg.id} className="message-bubble" style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              <div
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
            </div>
        );
    }
  
    return (
      <>
        {localMessages.map((msg) => renderMessage(msg))}
      </>
    );
  };
  
const TestMess = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const [username, setUsername] = useState("");

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }
  return (
    <div className="background">
      <div className="shadow">
        {user && (
          <ChatEngine
            projectID="5f5b4220-901f-4bde-826b-b245dcb0f9bf"
            userName={user?.username}
            userSecret="123456"
            renderNewChatForm={(creds) => renderChatForm(creds)}
            height="80vh"
            renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => <CustomMessageBubble props={{
                creds: creds,
                chat: chat,
                lastMessage: lastMessage,
                message: message,
                nextMessage: nextMessage,
            }} />}
          />
        )}
        {/* <MessageList
                    messageStyle={{
                        border: '2px solid blue'
                    }}
                    messages={[
                        {
                        attachments: [],
                        created: '2021-07-14 01:01:00.000000+00:00',
                        custom_json: '',
                        id: 1001,
                        sender: {
                            avatar: 'https://chat-engine-assets.s3.amazonaws.com/tutorials/my-face-min.png',
                            custom_json: '',
                            first_name: 'Adam',
                            is_online: true,
                            last_name: 'La Morre',
                            username: 'adam_lamorre'
                        },
                        sender_username: 'Adam_La_Morre',
                        text: `<TestChart />`,
                    },
                        {
                        attachments: [],
                        created: '2021-07-14 01:02:00.000000+00:00',
                        custom_json: '',
                        id: 1002,
                        sender: {
                            avatar: null,
                            custom_json: '',
                            first_name: 'Bob',
                            is_online: true,
                            last_name: 'Baker',
                            username: 'bob_baker'
                        },
                        sender_username: 'bob_baker',
                        text: '<p>Second message</p>'
                        },
                        {
                        attachments: [],
                        created: '2021-07-14 01:03:00.000000+00:00',
                        custom_json: '',
                        id: 1003,
                        sender: '[Circular]',
                        sender_username: 'bob_baker',
                        text: '<p>Third message</p>'
                        },
                        {
                        attachments: [
                            {
                            created: '2021-08-03T00:16:52.633778Z',
                            file: 'https://chat-engine-assets.s3.amazonaws.com/tutorials/nextjs-chat-tutorial/thumb.png',
                            id: 10
                            },
                            {
                            created: '2021-08-03T00:16:59.633778Z',
                            file: 'https://chat-engine-assets.s3.amazonaws.com/click.mp3',
                            id: 11
                            }
                        ],
                        created: '2021-07-14 01:04:00.000000+00:00',
                        custom_json: '',
                        id: 1004,
                        sender: '[Circular]',
                        sender_username: 'Adam_La_Morre',
                        text: '<p>Fouth and final message</p>'
                        }
                    ]}
                    onBottomMessageHide={function noRefCheck(){}}
                    onBottomMessageShow={function noRefCheck(){}}
                    onMessageLoaderHide={function noRefCheck(){}}
                    onMessageLoaderShow={function noRefCheck(){}}
                    style={{
                        border: '2px solid red',
                        boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
                        maxWidth: '500px'
                    }}
                /> */}

        <>
          {/* <MultiChatWindow {...chatProps} />
                    <MultiChatSocket {...chatProps} /> */}
        </>
      </div>
    </div>
  );
};

export default TestMess;
