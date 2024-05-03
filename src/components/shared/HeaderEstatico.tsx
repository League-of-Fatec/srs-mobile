import { Text, View } from "react-native";
import stylesHeader from "./styles/stylesHeader";

const Header = ({ title }: { title: string }) => {
    return (
        <View style={stylesHeader.header}>
            <Text style={stylesHeader.headerTitulo}>{title}</Text>
        </View>
    );
}

export default Header;