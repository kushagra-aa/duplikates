import POSTS from "@/dummy/posts.json";
import { UserType } from "@/types/common.type";
import { PostFullType, PostType } from "@/types/post.type";
import { getUser } from "./users.api";

const postsDB = POSTS as PostType[];
export const getPosts = () => {
  return postsDB;
};
export const getFullPosts = (): PostFullType[] => {
  const posts = getPosts();
  return posts.map((c) => ({ ...c, user: getUser(c.user) }));
};
export const getPost = (postID: PostType["id"]): PostFullType | undefined => {
  const posts = getFullPosts();
  return posts.find((u) => u.id === postID);
};
export const getPostsByUser = (userID: UserType["id"]): PostFullType[] => {
  const posts = getFullPosts();
  const userPosts = posts.filter((u) => u.user?.id === userID) || [];
  return userPosts;
};
