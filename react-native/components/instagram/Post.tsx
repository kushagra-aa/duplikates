import { PostFullType } from "@/types/post.type";
import { StyleSheet, Text, View } from "react-native";

export default function Post({ post }: { post: PostFullType }) {
  return (
    <View>
      <Text>{post.user?.username}</Text>
      <Text>{post.data.caption}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
