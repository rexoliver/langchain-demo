import styled from "@emotion/styled";

export const ChatBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  width: 100%; // Make ChatBox wider

  ::placeholder {
    color: #999;
  }

  // Accommodate dark mode
  @media (prefers-color-scheme: dark) {
    color: #ccc;

    ::placeholder {
      color: #666;
    }
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1c86ee;
  }
`;

export const Notice = styled.p`
  font-size: 12px;
  text-align: center;
  color: #777;
  margin-top: 8px;

  @media (prefers-color-scheme: dark) {
    color: #ccc;
  }
`;
