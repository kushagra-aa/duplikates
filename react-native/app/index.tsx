import { COLORS } from "@/constants/colors";
import SOCIALS from "@/dummy/socials";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SOCIAL_LOGOS: Record<string, any> = {
  Instagram: require("./../assets/images/logos/InstagramLogo.png"),
  LinkedIn: require("./../assets/images/logos/LinkedInLogo.png"),
  Snapchat: require("./../assets/images/logos/SnapchatLogo.png"),
  Telegram: require("./../assets/images/logos/TelegramLogo.png"),
  Whatsapp: require("./../assets/images/logos/WhatsAppLogo.png"),
  X: require("./../assets/images/logos/XLogo.png"),
};

function SocialButton({
  social,
  i,
}: {
  social: (typeof SOCIALS)[number];
  i: number;
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: social.bg,
          borderColor: social.stroke,
          borderWidth: social.stroke ? 1 : 0,
          flexDirection: i % 2 ? "row" : "row-reverse",
        },
      ]}
    >
      <Text style={[styles.buttonText, { color: social.color }]}>
        {social.name}
      </Text>
      <Image style={styles.buttonImage} source={SOCIAL_LOGOS[social.name]} />
    </TouchableOpacity>
  );
}

export default function Index() {
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
          <SocialButton social={s} key={s.name} i={i} />
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
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 64,
    borderRadius: 32,
    backgroundColor: COLORS.SnapchatYellow,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "500",
  },
  buttonImage: {
    height: 50,
    width: 50,
  },
});
