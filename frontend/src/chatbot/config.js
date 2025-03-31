import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "PassBot",
  initialMessages: [createChatBotMessage("Hello! Type a password to analyze.")],
};

export default config;
