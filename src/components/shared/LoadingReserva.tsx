import { ActivityIndicator, View } from "react-native";
import loadingStyle from "./styles/loadingStyle";

const LoadingReserva = () => {
    return (
        <View style={loadingStyle.loadingContainerReserva}>
            <ActivityIndicator
                size="small"
                color={"#FFFFFF"}
            />
        </View>);
}

export default LoadingReserva;