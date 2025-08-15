import USERS from "@/dummy/users.json";
import { UserType } from "@/types/common.type";

const usersDB = USERS as UserType[];
export const getUsers = () => {
  return usersDB;
};
export const getUser = (userID: UserType["id"]): UserType | undefined => {
  return usersDB.find((u) => u.id === userID);
};
