import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})
const Footer = () => {

    return (
        <View style={styles.container}>
            <Text>Footer</Text>
        </View>
    )
}

export default Footer