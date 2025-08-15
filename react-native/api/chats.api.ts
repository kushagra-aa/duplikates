import CHATS from "@/dummy/chats.json";
import { ChatFullType, ChatType } from "@/types/chat.type";
import { UserType } from "@/types/common.type";
import { getUser } from "./users.api";

const chatsDB = CHATS as ChatType[];
export const getChats = () => {
  return chatsDB;
};
export const getFullChats = (): ChatFullType[] => {
  const chats = getChats();
  return chats.map((c) => ({ ...c, user: getUser(c.user) }));
};
export const getChat = (chatID: ChatType["id"]): ChatFullType | undefined => {
  const chats = getFullChats();
  return chats.find((u) => u.id === chatID);
};
export const getChatsByUser = (userID: UserType["id"]): ChatFullType[] => {
  const posts = getFullChats();
  const userChats = posts.filter((u) => u.user?.id === userID) || [];
  return userChats;
};
