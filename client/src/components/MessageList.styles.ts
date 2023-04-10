import styled from "@emotion/styled";

export const MessageListContainer = styled.div`
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (prefers-color-scheme: dark) {
    border-color: #666;
  }
`;

export const Message = styled.div`
  padding: 5px;
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;

  @media (prefers-color-scheme: dark) {
    color: #ccc;
  }
`;
