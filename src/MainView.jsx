import { useEffect, useState } from 'react';
import getDistance from 'geolib/es/getDistance';
import { StatusBar, View, Text, StyleSheet, ScrollView, Pressable} from 'react-native'
const geolib = require('geolib');

import GREENS from './ListOfGreens'

const distance =  (lat1, lon1, lat2, lon2) =>{
    console.log('dist',lat1, lon1, lat2, lon2);
    return getDistance(
        { latitude: lat1, longitude: lon1 },
        { latitude: lat2, longitude: lon2 },
    )
}

const MainView = () => {
    const [front, setFront] = useState(0)
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [back, setBack] = useState(0)
    const [hole, setHole] = useState(0)
    const [curLat, setCurLat] = useState()
    const [curLng, setCurLng] = useState()

    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
                setCurLat(pos.lat)
                setCurLng(pos.lng)
                console.log(pos);
              },
              () => {
                console.log('eka error');
              }
            );
          } else {
            // Browser doesn't support Geolocation
            console.log('toka error');
          }
    },[])
    
    const OnPressFunction = (e) => {
          const etu = distance(e.front.lat, e.front.long, curLat, curLng)
          setFront(etu)
        //   setLeft(distance(e.left.lat, e.left.long, curLat, curLng))
        //   setBack(distance(e.back.lat, e.back.long, curLat, curLng))
        //   setRight(distance(e.right.lat, e.right.long, curLat, curLng))
        //   setHole(e.id)
          console.log(front);
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
             {/* <View style={styles.greenContainer}>
                <View style={styles.green}>
                    {/* <Text style={{position: 'relative',top: -10, left: '45%', fontSize:19, fontWeight: 'bold'}}>{!back ? '000' : back} m</Text>  */}
                    {/* <Text style={{position: 'relative', top: 10, fontSize:19, fontWeight: 'bold'}}>{!left ? '000' : left} m</Text> */}
                    {/* <Text style={{position: 'relative',top: -10, left: '90%', fontSize:19, fontWeight: 'bold'}}>{!right ? '000' : right} m</Text>  */}
                    {/* <Text style={{position: 'relative',bottom: -25, left: '45%', fontSize:19, fontWeight: 'bold'}}>{!front ? '000' : front} m</Text>  */}
                    {/* <Text style={{position: 'relative',fontSize:19, fontWeight: 'bold'}}>{!hole ? '' : '#' + hole}</Text>  

                </View>
               
            </View>  */}
            
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