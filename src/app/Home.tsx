import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { View, Text } from "react-native";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 64 }}>
      <Header>
        <Title>Home</Title>
        <Button iconName="add-circle">New</Button>
      </Header>
    </View>
  );
}