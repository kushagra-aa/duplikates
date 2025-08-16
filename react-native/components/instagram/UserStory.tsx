import { COLORS } from "@/constants/colors";
import { UserType } from "@/types/common.type";
import { Image, StyleSheet, Text, View } from "react-native";

export default function UserStory({ user }: { user: UserType }) {
  return (
    <View style={styles.userStoryContainer}>
      <Image src={user.image} style={styles.userImage} />
      <Text style={styles.userName}>{user.username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  userStoryContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 110,
  },
  userImage: {
    height: 75,
    width: 75,
    borderRadius: 50,
    borderColor: COLORS.InstagramPink,
    borderWidth: 4,
  },
  userName: {
    color: COLORS.White,
    fontSize: 12,
  },
});
