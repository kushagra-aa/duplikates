import { UserType } from "./common.type";

export type ChatType = {
  id: string;
  name: string;
  date: string;
  image: string;
  is_read: false;
  user: string; // user_id
  messages: MessageType[];
};
export type ChatFullType = {
  id: string;
  name: string;
  date: string;
  image: string;
  is_read: false;
  user?: UserType;
  messages: MessageType[];
};

export type TextMessageType = {
  type: "text";
  text: string;
};

export type ImageMessageType = {
  type: "image";
  text: string;
  image: string;
};

export type BaseMessageType = {
  from: string;
  to: string;
  at: string;
};

export type MessageType = BaseMessageType &
  (TextMessageType | ImageMessageType);
