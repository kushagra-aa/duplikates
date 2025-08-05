import { COLORS } from "@/constants/colors";
import SOCIALS from "@/dummy/socials";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const SOCIAL_LOGOS: Record<string, any> = {
  Instagram: require("./../assets/images/logos/InstagramLogo.png"),
  LinkedIn: require("./../assets/images/logos/LinkedInLogo.png"),
  Snapchat: require("./../assets/images/logos/SnapchatLogo.png"),
  Telegram: require("./../assets/images/logos/TelegramLogo.png"),
  Whatsapp: require("./../assets/images/logos/WhatsAppLogo.png"),
  X: require("./../assets/images/logos/XLogo.png"),
};

export default function SocialButton({
  social,
  i,
  handleButtonClick,
}: {
  social: (typeof SOCIALS)[number];
  i: number;
  handleButtonClick: (url: string) => void;
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
      onPress={() => handleButtonClick(social.url)}
    >
      <Text style={[styles.buttonText, { color: social.color }]}>
        {social.name}
      </Text>
      <Image style={styles.buttonImage} source={SOCIAL_LOGOS[social.name]} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
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
