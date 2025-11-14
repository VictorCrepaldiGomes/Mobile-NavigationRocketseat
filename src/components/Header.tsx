import { View } from "react-native";

export function Header({ children }: { children?: React.ReactNode }) {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
      }}
    >
      {children}
    </View>
  );
}
