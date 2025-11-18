import {
  createDrawerNavigator,
  DrawerScreenProps,
} from "@react-navigation/drawer";
import React from "react";
import Product from "@/app/Product";
import Home from "@/app/Home";
import { MaterialIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export type DrawerParamList = {
  Home: undefined;
  Product: { id: string };
};

export type DrawerRoutesProps<T extends keyof DrawerParamList> = DrawerScreenProps<
  DrawerParamList,
  T
>;

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, drawerActiveTintColor: "#6200ee", drawerInactiveTintColor: "#828282" }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Início",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Product"
        component={Product}
        options={{
          drawerLabel: "Produto",
          drawerIcon : ({ color, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
