import { ActivityIndicator, View } from "react-native";
import loadingStyle from "./styles/loadingStyle";

const LoadingModalProfessor = () => {
    return (
        <View style={loadingStyle.loadingContainerModalProfessor}>
            <ActivityIndicator
                size="large"
                color={"#6D1C1C"}
            />
        </View>);
}

export default LoadingModalProfessor;