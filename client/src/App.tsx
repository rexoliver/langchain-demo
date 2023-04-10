import React, { useState } from "react";
import ChatBox from "./components/ChatBox";
import { Notice } from "./components/ChatBox.styles"
import MessageList from "./components/MessageList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleInputSubmit = (text: string) => {
    setInputText(text);
    setMessages([...messages, text]);
    // Add your logic to handle the submitted text
  };

  return (
    <div className="App">
      <div className="ChatBoxWrapper">
        <MessageList messages={messages} />
        <ChatBox inputText={inputText} onInputSubmit={handleInputSubmit} />
        <Notice>
          RexGPT April 10 Version. Output is not filtered, expect some NSFW content.
        </Notice>
      </div>
    </div>
  );
}

export default App;
