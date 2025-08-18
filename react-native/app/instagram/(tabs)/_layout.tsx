import { Icon } from "@/components/Icons";
import { COLORS } from "@/constants/colors";
import AddIcon from "@/icons/AddIcon.svg";
import HomeIcon from "@/icons/HousrIcon.svg";
import ProfileIcon from "@/icons/ProfileIcon.svg";
import SearchIcon from "@/icons/SearchIcon.svg";
import { Tabs } from "expo-router";

const tabIconSize = 25;

export default function InstagramLayout() {
  return (
    <Tabs
      screenOptions={{
        sceneStyle: { backgroundColor: COLORS.Black1 },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.White,
        tabBarActiveTintColor: COLORS.InstagramPurple,
        tabBarStyle: { backgroundColor: COLORS.Black1 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              size={tabIconSize}
              Icon={HomeIcon}
              color={color as keyof typeof COLORS}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              size={tabIconSize}
              Icon={SearchIcon}
              color={color as keyof typeof COLORS}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              size={tabIconSize}
              Icon={AddIcon}
              color={color as keyof typeof COLORS}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              size={tabIconSize}
              Icon={ProfileIcon}
              color={color as keyof typeof COLORS}
            />
          ),
        }}
      />
    </Tabs>
  );
}
