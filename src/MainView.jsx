import { useState } from 'react';

import { StatusBar, View, Text, StyleSheet, ScrollView, Pressable} from 'react-native'


import GREENS from './ListOfGreens'



const MainView = () => {
    const [front, setFront] = useState(0)
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [back, setBack] = useState(0)
    const [hole, setHole] = useState(0)

    const OnPressFunction = (e) => {
        setFront(e.front)
        setLeft(e.left)
        setBack(e.back)
        setRight(e.right)
        setHole(e.id)
    }
    

    return (
        <View style={styles.container}>
            {
                GREENS.map((green) => (
                    <View key={green.id} style={styles.item}>
                        <Pressable 
                            style={styles.button} 
                            onPress={() => 
                                OnPressFunction(green)    
                            }>
                            <Text style={styles.text} >
                                # {green.id}
                            </Text>
                        </Pressable>
                    </View>
                ))
            }
            <View style={styles.greenContainer}>
                <View style={styles.green}>
                    <Text style={{position: 'relative',top: -10, left: '45%', fontSize:19, fontWeight: 'bold'}}>{!back ? '000' : back} m</Text> 
                    <Text style={{position: 'relative', top: 10, fontSize:19, fontWeight: 'bold'}}>{!left ? '000' : left} m</Text>
                    <Text style={{position: 'relative',top: -10, left: '90%', fontSize:19, fontWeight: 'bold'}}>{!right ? '000' : right} m</Text>
                    <Text style={{position: 'relative',bottom: -25, left: '45%', fontSize:19, fontWeight: 'bold'}}>{!front ? '000' : front} m</Text> 
                    <Text style={{position: 'relative',fontSize:19, fontWeight: 'bold'}}>{!hole ? '' : '#' + hole}</Text> 

                </View>
               
            </View>
            
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

 const styles = StyleSheet.create({
    greenContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    green: {
        borderRadius: '45%',
        backgroundColor: 'green',
        border: 'solid white',
        height: 100,
        width: '50%'
    },
    container: {
        backgroundColor: 'grey',
        marginHorizontal: "auto",
        width: '100%',
        flexDirection: "row",
        flexWrap: "wrap",
        height: '90%',
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