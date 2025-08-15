import { UserType } from "./common.type";

export type PostType = {
  id: string;
  user: string; //user_id
  date: string;
  data: PostDataType;
  insights: PostInsightType;
  comments: PostCommentType[];
};
export type PostFullType = {
  id: string;
  user?: UserType;
  date: string;
  data: PostDataType;
  insights: PostInsightType;
  comments: PostCommentType[];
};

export type PostInsightType = {
  likes: number;
  comments: number;
  shares: number;
  reach: number;
};

export type PostDataType = {
  caption: string;
  pictures: string[];
};

export type PostCommentType = {
  id: string;
  user: string; //user_id
  date: string;
  data: Omit<PostDataType, "pictures">;
  insights: PostInsightType;
};
