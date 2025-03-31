import axios from "axios";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async handlePasswordAnalysis(password) {
    const response = await axios.post("http://localhost:5000/analyze", { password });
    const message = this.createChatBotMessage(response.data.analysis);
    
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
  }
}

export default ActionProvider;
