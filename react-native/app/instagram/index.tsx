import { getFullPosts } from "@/api/posts.api";
import { getUsers } from "@/api/users.api";
import Post from "@/components/instagram/Post";
import UserStory from "@/components/instagram/UserStory";
import { FlatList, StyleSheet, View } from "react-native";

export default function InstagramPage() {
  const posts = getFullPosts();
  const users = getUsers();
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserStory user={item} />}
        contentContainerStyle={styles.stories}
        keyExtractor={(item) => item.id}
        horizontal
        scrollEnabled
      />
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        contentContainerStyle={styles.posts}
        keyExtractor={(item) => item.id}
        scrollEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: 30,
  },
  stories: {
    gap: 15,
  },
  posts: {
    gap: 20,
  },
});
