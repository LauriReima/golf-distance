import { StatusBar, View, Text, StyleSheet, ScrollView, Pressable} from 'react-native'


import GREENS from './ListOfGreens'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        marginHorizontal: "auto",
        width: '100%',
        flexDirection: "row",
        flexWrap: "wrap",
        height: '85%',
        padding: 10
    },
    item: {
        flex: 1,
        minWidth: 100,
        maxWidth: '33%',
        padding:10,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        padding: 20
    },
    button: {
        justifyContent: 'center',
        backgroundColor: 'green',
        borderRadius: 20,
        height:50,
        maxWidth:290
    }
})

const MainView = () => {

    return (
        <View style={styles.container}>
            {
                GREENS.map((green) => (
                    <View key={green.id} style={styles.item}>
                        <Pressable style={styles.button}>
                            <Text style={styles.text}># {green.id}</Text>
                        </Pressable>
                    </View>
                ))
            }
        </View>
        // <ScrollView>
        //     {
        //         GREENS.map((green) =>
        //            ( <View key={green.id} style={styles.container}>
        //                 <Pressable style={styles.button}>
        //                     <Text style={styles.text}>Hole: {green.id}</Text>
        //                 </Pressable>
        //             </View>)
        //         )
        //     }
        //     {/* <StatusBar /> */}
        // </ScrollView>
    )
}
 export default MainView