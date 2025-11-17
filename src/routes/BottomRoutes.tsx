import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import React from "react";
import Product from "@/app/Product";
import Home from "@/app/Home";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export type TabParamList = {
  Home: undefined;
  Product: { id: string };
};

export type TabRoutesProps<T extends keyof TabParamList> = BottomTabScreenProps<
  TabParamList,
  T
>;

export function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#6200ee", tabBarInactiveTintColor: "#828282" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarLabel: "Produto",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
