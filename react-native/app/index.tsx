import { Icon } from "@/components/Icons";
import AddIcon from "@/icons/ArrowDownIcon.svg";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Icon Icon={AddIcon} color="SnapchatYellow" />
    </View>
  );
}
