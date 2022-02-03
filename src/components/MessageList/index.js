import { Message } from "../Message";

export const MessageList = ({ messages }) =>
  messages.map((message) => (
    <Message text={message.text} author={message.athuor} />
  ));
