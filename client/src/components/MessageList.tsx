import React from "react";
import { MessageListContainer, Message } from "./MessageList.styles";

interface MessageListProps {
  messages: string[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <MessageListContainer>
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          <Message>{message}</Message>
          <Message>RexGPT has heard you.</Message>
        </React.Fragment>
      ))}
    </MessageListContainer>
  );
};

export default MessageList;
