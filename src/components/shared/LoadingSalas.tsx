import { ActivityIndicator, View } from "react-native";
import loadingStyle from "./styles/loadingStyle";

const LoadingSalas = () => {
    return (
        <View style={loadingStyle.loadingContainerSalas}>
            <ActivityIndicator
                size="large"
                color={"#6D1C1C"}
            />
        </View>);
}

export default LoadingSalas;