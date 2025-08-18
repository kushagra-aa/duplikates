import { getFullPosts } from "@/api/posts.api";
import { getUsers } from "@/api/users.api";
import Post from "@/components/instagram/Post";
import UserStory from "@/components/instagram/UserStory";
import { FlatList, StyleSheet } from "react-native";

export default function InstagramPage() {
  const posts = getFullPosts();
  const users = getUsers();
  return (
    <>
      {/* Posts */}
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        contentContainerStyle={styles.posts}
        keyExtractor={(item) => item.id}
        scrollEnabled
        ListHeaderComponent={
          <>
            {/* User Stories */}
            <FlatList
              data={users}
              renderItem={({ item }) => <UserStory user={item} />}
              contentContainerStyle={styles.stories}
              keyExtractor={(item) => item.id}
              horizontal
              scrollEnabled
            />
          </>
        }
        ListFooterComponent={<></>}
      />
    </>
  );
}

const styles = StyleSheet.create({
  stories: {
    gap: 15,
  },
  posts: {
    gap: 20,
  },
});
