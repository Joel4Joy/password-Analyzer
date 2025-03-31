class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      this.actionProvider.handlePasswordAnalysis(message);
    }
  }
  
  export default MessageParser;
  