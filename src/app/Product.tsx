import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { View, Text } from "react-native";
import { Title } from "@/components/Title";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { StackRoutesProps } from "@/routes/StackRoutes";

type ProductProps = StackRoutesProps<"Product">;

export default function Product() {
  const navigation = useNavigation<ProductProps["navigation"]>();
  const {params} = useRoute<ProductProps["route"]>();

  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 64 }}>
      <Header>
        <Button iconName="arrow-circle-left" onPress={() => navigation.goBack()}>
          Back
        </Button>
        <Title>Product {params?.id}</Title>
      </Header>
    </View>
  );
}