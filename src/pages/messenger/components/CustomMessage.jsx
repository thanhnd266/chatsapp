import React from 'react'
import TestChart from '../charts/TestChart';
import PieChartComp from '../charts/PieChart';
import { CustomChatMessage, CustomMessageStyled } from './CustomMessage.styled';
import BarChartComp from '../charts/BarChart';
import TreeChartComp from '../charts/TreeChartComp';

function isValidJSON(str) {
  try {
      JSON.parse(str);
      return true;
  } catch (e) {
      return false;
  }
}

const CustomMessage = ({ props }) => {
    const currentUser = JSON.parse(localStorage.getItem("userData"));
    const { creds, chat, lastMessage, message, nextMessage } = props;

    let addOnChart = '';

    if(isValidJSON(message.text)) {
      if(Array.isArray(JSON.parse(message.text)?.dataChart)) {
        const {dataChart, greeting, guide} = JSON.parse(message.text);
        if(dataChart.length > 0) {
          if(dataChart[0].isLineChart) {
            addOnChart = (
              <div className="message-with-chart">
                  <span>{greeting}</span>
                  <div
                    dangerouslySetInnerHTML={{ __html: guide }}
                  />
                  <TestChart data={dataChart} />
              </div>
            )
          } else if(dataChart[0].isPieChart) {
            addOnChart = (
              <div className="message-with-chart">
                <span>{greeting}</span>
                {guide}
                <PieChartComp data={dataChart} />
              </div>
            )
          } else if(dataChart[0].isBarChart) {
            addOnChart = (
              <div className="message-with-chart">
                <span>{greeting}</span>
                {guide}
                <BarChartComp data={dataChart} />
              </div>
            )
          } else {
            addOnChart = (
              <div className="message-with-chart">
              <span>{greeting}</span>
              {guide}
              <TreeChartComp data={dataChart} />
            </div>
            )
          }
        }
      }
    }

    return (
      <CustomMessageStyled $isCurrentUser={(message?.sender?.username || message?.sender_username) === currentUser.username}>
        <div className='sender-info'>
          <img className='avatar-chat' src={message?.sender?.avatar || currentUser?.profilePicture} alt="avatar" />
          <span style={{ fontWeight: 700 }}>{(message?.sender?.username || message?.sender_username)}</span>
        </div>
        {addOnChart ? (
          <>
            <CustomChatMessage $isCurrentUser={(message?.sender?.username || message?.sender_username) === currentUser.username}>{addOnChart}</CustomChatMessage>
          </>
        ) : (
          <>
            {message.attachments.map((el, index) => (
              <div className='media-section' key={index}>
                <img src={el.file} alt="" />
              </div>
            ))}
            <CustomChatMessage $isCurrentUser={(message?.sender?.username || message?.sender_username) === currentUser.username}>
              <div
                dangerouslySetInnerHTML={{ __html: message.text }}
              />
            </CustomChatMessage>
            </>
        )}
      </CustomMessageStyled>
    );
}

export default CustomMessage