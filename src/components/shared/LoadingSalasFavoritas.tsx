import { ActivityIndicator, View } from "react-native";
import loadingStyle from "./styles/loadingStyle";

const LoadingSalasFavoritas = () => {
    return (
        <View style={loadingStyle.loadingSalasFavoritas}>
            <ActivityIndicator
                size="large"
                color={"#6D1C1C"}
            />
        </View>);
}

export default LoadingSalasFavoritas;