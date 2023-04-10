import React, { useState } from "react";
import { ChatBoxContainer, ChatInput, SubmitButton } from "./ChatBox.styles";

interface ChatBoxProps {
  inputText: string;
  onInputSubmit: (text: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ inputText, onInputSubmit }) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = () => {
    onInputSubmit(text);
    setText("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <ChatBoxContainer>
      <ChatInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter here"
      />
      <SubmitButton onClick={handleSubmit}>Send</SubmitButton>
    </ChatBoxContainer>
  );
};

export default ChatBox;
