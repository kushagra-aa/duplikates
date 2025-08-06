import { Icon } from "@/components/Icons";
import { COLORS } from "@/constants/colors";
import BackIcon from "@/icons/ArrowLeftIcon.svg";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InstagramHeader() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <Icon Icon={BackIcon} size={28} />
      </TouchableOpacity>
      <Text style={styles.title}>InstagramHeader</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Black2,
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: COLORS.InstagramPink,
  },
});
