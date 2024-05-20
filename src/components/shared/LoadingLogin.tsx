import { ActivityIndicator, View } from "react-native";
import loadingStyle from "./styles/loadingStyle";

const LoadingLogin = () => {
    return (
        <View style={loadingStyle.loadingContainerLogin}>
            <ActivityIndicator
                size="large"
                color={"#FFFFFF"}
            />
        </View>);
}

export default LoadingLogin;