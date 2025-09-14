import { createContext } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const value = {};
  return <ChatContext.Provider>{children}</ChatContext.Provider>;
};
