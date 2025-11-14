import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { View, Text } from "react-native";
import { Title } from "@/components/Title";

export default function Product() {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 64 }}>
      <Header>
        <Button iconName="arrow-circle-left">New</Button>
        <Title>Product</Title>
      </Header>
    </View>
  );
}