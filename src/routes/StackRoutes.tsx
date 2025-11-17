import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import Product from "@/app/Product";
import Home from "@/app/Home";

const Stack = createNativeStackNavigator();

export type StackParamList = {
    Home: undefined;
    Product: { id: string };
}

export type StackRoutesProps<T extends keyof StackParamList> = NativeStackScreenProps<StackParamList, T>;

export function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    )
}