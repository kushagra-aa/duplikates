import { Icon } from "@/components/Icons";
import { COLORS } from "@/constants/colors";
import HeartIcon from "@/icons/HeartIcon.svg";
import MessageIcon from "@/icons/MessagesIcon.svg";
import { useRouter } from "expo-router";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InstagramHeader() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <Text style={styles.title}>Instagram</Text>
      </TouchableOpacity>
      <View style={styles.actionsContainer}>
        <TouchableOpacity>
          <Icon Icon={HeartIcon} size={28} color={"White"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon Icon={MessageIcon} size={28} color={"White"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 12,
    paddingTop: Platform.OS === "android" ? 12 : 4,
    paddingBottom: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: COLORS.White,
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 20,
  },
});
