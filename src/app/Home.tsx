import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { View } from "react-native";
import { Title } from "@/components/Title";


export default function Home({ navigation }: any) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 64 }}>
      <Header>
         <Button
          iconName="menu"
          // onPress={() => navigation.navigate("Product", { id: "7" })}
          onPress={() => navigation.toggleDrawer()}
        >
          New
        </Button>
        <Title>Home</Title>
        <Button
          iconName="add-circle"
          onPress={() => navigation.navigate("Product", { id: "7" })}
        >
          New
        </Button>
      </Header>
    </View>
  );
}
