import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoutes";
import { TabRoutes } from "./BottomRoutes";
import { DrawerRoutes } from "./Drawer";

export function Routes() {
    return (
        <NavigationContainer>
            <DrawerRoutes />
        </NavigationContainer>
    )
}