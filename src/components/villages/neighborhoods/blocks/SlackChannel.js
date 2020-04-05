import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-grid-system';
import SlackChannelImg from '../../../../images/\Slack Channel.png';
import UserMessage from "./houses/UserMessage.js"
import ChatBotMessage from "./houses/\Chat Bot Message.js";
class SlackChannel extends React.Component{
  render(){
    const messages = this.props.messages;
    return(
      <Col lg={12}>
        <img className="slack-channel" src={SlackChannelImg}/>

        { messages ?
        (
          <div>
        <UserMessage/>
        <ChatBotMessage/>
        </div>
      ): (
        <div></div>
      )}
      </Col>

    )
  }
}

export default SlackChannel;
