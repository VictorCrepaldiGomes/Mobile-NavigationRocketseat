import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

type PProps = TouchableOpacityProps & {
    iconName: keyof typeof MaterialIcons.glyphMap;
};

export function Button({ children, iconName, ...rest }: PProps) {
    return (
        <TouchableOpacity {...rest}>
            <MaterialIcons name={iconName} size={24} />
        </TouchableOpacity>
    );
}
