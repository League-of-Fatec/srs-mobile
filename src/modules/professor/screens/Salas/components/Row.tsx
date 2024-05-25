import { StyleSheet, View } from "react-native"

const Row = () => {
    return (
        <View style={styles.row}></View>
    )
}


const styles = StyleSheet.create({
    row: {
        alignSelf: 'center',
        width: '100%',
        borderWidth: 2.1,
        borderColor: '#d9d9d9',
        marginVertical: 35,
    }
});

export default Row;