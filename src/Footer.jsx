import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginBottom: 34,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
})
const Footer = () => {

    return (
        <View style={styles.container}>
            <Text>LR Desing</Text>
        </View>
    )
}

export default Footer