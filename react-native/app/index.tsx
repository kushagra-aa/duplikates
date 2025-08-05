import SocialButton from "@/components/SocialButton";
import { COLORS } from "@/constants/colors";
import SOCIALS from "@/dummy/socials";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  const handleButtonClick = (url: string) => {
    router.push({ pathname: url as any });
  };
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.whiteText]}>
          Choose One App <Text style={styles.accentText}>App</Text>
        </Text>
        <Text style={[styles.subTitle, styles.whiteText]}>To Open</Text>
        <Text style={[styles.subTitle, styles.whiteText]}>
          It&apos;s <Text style={styles.accentText}>Clone</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        {SOCIALS.map((s, i) => (
          <SocialButton
            social={s}
            key={s.name}
            i={i}
            handleButtonClick={handleButtonClick}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.Black2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 48,
  },
  titleContainer: { gap: 8, alignItems: "center" },
  accentText: { color: COLORS.Accent },
  whiteText: { color: COLORS.White },
  title: { fontSize: 32, letterSpacing: 2 },
  subTitle: { fontSize: 28, letterSpacing: 4 },
  buttonsContainer: {
    gap: 20,
  },
});
