import InstagramHeader from "@/components/instagram/Header";
import { Stack } from "expo-router";

export default function InstagramLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: true, header: () => <InstagramHeader /> }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
