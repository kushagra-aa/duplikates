import InstagramHeader from "@/components/instagram/Header";
import { COLORS } from "@/constants/colors";
import { Stack } from "expo-router";

export default function InstagramLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        header: () => <InstagramHeader />,
        contentStyle: { backgroundColor: COLORS.Black1 },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
