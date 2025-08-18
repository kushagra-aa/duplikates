import { COLORS } from "@/constants/colors";
import useDimensions from "@/hooks/useDimensions";
import SaveIcon from "@/icons/BookmarIcon.svg";
import CommentIcon from "@/icons/CommentIcon.svg";
import HeartIcon from "@/icons/HeartIcon.svg";
import MoreIcon from "@/icons/MoreIcon.svg";
import ShareIcon from "@/icons/ShareIcon.svg";
import ThreeDotsIcon from "@/icons/ThreeDotsVerticalIcon.svg";
import { PostFullType } from "@/types/post.type";
import { getRandomBoolean } from "@/utils/random";
import { getPostDate } from "@/utils/timeUtil";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "../Icons";

export default function Post({ post }: { post: PostFullType }) {
  const dimensions = useDimensions();
  return (
    <View style={styles.postContainer}>
      {/* Header of the Post - User, Three Dots */}
      <View style={styles.postHeader}>
        <View style={styles.userContainer}>
          <Image src={post.user?.image} style={styles.userImage} />
          <Text style={styles.userName}>{post.user?.username}</Text>
        </View>
        <TouchableOpacity>
          <Icon
            Icon={ThreeDotsIcon}
            size={styles.postActionIcons.width}
            color={"White"}
          />
        </TouchableOpacity>
      </View>
      {/* Post Media */}
      <View style={styles.postMedia}>
        <FlatList
          data={post.data.pictures}
          renderItem={({ item }) => (
            <Image
              src={item}
              style={{
                width: dimensions.screen.width,
                height: dimensions.screen.width,
              }}
            />
          )}
          horizontal
        />
        {post.data.pictures.length > 1 && (
          <Icon
            Icon={MoreIcon}
            size={styles.postMoreIcon.width}
            color={"White"}
          />
        )}
      </View>
      {/* Footer of the Post - Like, Comments, Share, Save */}
      <View style={styles.postFooter}>
        <View style={styles.postActions}>
          <TouchableOpacity style={styles.postAction}>
            <Icon
              Icon={HeartIcon}
              size={styles.postActionIcons.width}
              color={getRandomBoolean(0.75) ? "White" : "InstagramPink"}
            />
            <Text style={styles.postActionText}>{991}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postAction}>
            <Icon
              Icon={CommentIcon}
              size={styles.postActionIcons.width}
              color={"White"}
            />
            <Text style={styles.postActionText}>{12}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postAction}>
            <Icon
              Icon={ShareIcon}
              size={styles.postActionIcons.width}
              color={"White"}
            />
            <Text style={styles.postActionText}>{2}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.postAction}>
          <Icon
            Icon={SaveIcon}
            size={styles.postActionIcons.width}
            color={getRandomBoolean(0.15) ? "White" : "InstagramPink"}
          />
        </TouchableOpacity>
      </View>
      {/* Post Text - Username, Caption */}
      <View style={styles.postText}>
        <Text style={styles.userName}>{post.user?.username}</Text>
        <Text style={styles.postCaption}>{post.data.caption}</Text>
      </View>
      {/* Post Date */}
      <Text style={styles.postDate}>{getPostDate(post.date)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    gap: 8,
  },
  postHeader: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  userImage: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  userName: {
    color: COLORS.White,
    fontWeight: "600",
  },
  postMedia: {
    alignItems: "center",
  },
  postMoreIcon: {
    width: 70,
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  postActions: {
    flexDirection: "row",
    gap: 8,
  },
  postAction: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  postActionIcons: {
    width: 24,
  },
  postActionText: {
    color: COLORS.White,
  },
  postText: {
    paddingHorizontal: 10,
  },
  postCaption: {
    color: COLORS.White,
    fontSize: 12,
  },
  postDate: {
    paddingHorizontal: 10,
    color: COLORS.White,
  },
});
