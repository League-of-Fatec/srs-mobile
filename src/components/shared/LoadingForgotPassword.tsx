
import { ActivityIndicator, View } from "react-native";
import loadingStyle from "./styles/loadingStyle";

const LoadingForgotPassword = () => {
    return (
        <View style={loadingStyle.loadingContainerForgotPassword}>
            <ActivityIndicator
                size="large"
                color={"#FFFFFF"}
            />
        </View>);
}

export default LoadingForgotPassword;