import { ActivityIndicator, View } from "react-native";
import loadingStyle from "./styles/loadingStyle";

const Loading = () => {
    return (
        <View style={loadingStyle.loadingContainer}>
            <ActivityIndicator
                size="large"
                color={"red"}
            />
        </View>);
}

export default Loading;