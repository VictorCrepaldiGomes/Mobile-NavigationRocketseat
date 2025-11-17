import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoutes";
import { TabRoutes } from "./BottomRoutes";

export function Routes() {
    return (
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    )
}