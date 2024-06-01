
import React from 'react'
import { ChatCard, ChatForm, ChatHeader, ChatSettings, MessageForm, MessageList } from 'react-chat-engine-advanced'
import ListChat from './components/ListChat'
import ListMessage from './components/ListMessage'

const TestAdvanced = () => {
  return (
    <div>
        <ChatForm
            onFormSubmit={function noRefCheck(){}}
            style={{
                boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
                maxWidth: '400px'
            }}
        />
        <ChatCard
          avatarUsername="Adam"
          description="Alert alert!!!"
          hasNotification
          onClick={function noRefCheck(){}}
          style={{
            boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px'
          }}
          timeStamp="Tues"
          title="Notification Card"
        />
        <div>
        <ChatHeader
          description="Where the magic happens..."
          id={1}
          style={{
            maxWidth: '600px'
          }}
          title="Magic Club"
        />
        <ListChat />
        <ListMessage />
        <MessageForm
          attachmentInputIconStyle={{
            border: '2px solid black'
          }}
          attachmentInputStyle={{
            padding: '6px 8px'
          }}
          onChange={function noRefCheck(){}}
          onSubmit={function noRefCheck(){}}
          sendButtonStyle={{
            border: '2px solid blue'
          }}
          style={{
            maxWidth: '600px',
            cursor: 'pointer'
          }}
        />
        </div>

        <div>
        <ChatSettings
          isLoading
          onDeleteChatClick={function noRefCheck(){}}
          onInvitePersonClick={function noRefCheck(){}}
          onRemovePersonClick={function noRefCheck(){}}
        />
        </div>
    </div>
  )
}

export default TestAdvanced