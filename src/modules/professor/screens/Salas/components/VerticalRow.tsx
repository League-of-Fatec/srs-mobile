import { StyleSheet, View } from "react-native"

const VerticalRow = () => {
    return (
        <View style={styles.verticalRow}></View>
    )
}


const styles = StyleSheet.create({
    verticalRow: {
        alignSelf: 'center',
        width: '100%',
        borderLeftWidth: 4,
        height: '100%',
        borderColor: '#d3d3d3',
    }
});

export default VerticalRow;