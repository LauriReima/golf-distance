import { useEffect, useState } from 'react';
import getDistance from 'geolib/es/getDistance';
import { StatusBar, View, Text, StyleSheet, ScrollView, Pressable, TouchableHighlight} from 'react-native'

import * as Location from 'expo-location';

import GREENS from './ListOfGreens'
import { Alert } from 'react-native';

const distance =  (lat1, lon1, lat2, lon2) =>{
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
    const [curLat, setCurLat] = useState(0)
    const [curLng, setCurLng] = useState(0)
    const [errorMsg, setErrorMsg] = useState()
    const [loading, setLoading] = useState(false)
    
    
        useEffect(()=>{
                (async () => {
            
                    let { status } = await Location.requestForegroundPermissionsAsync();
                    if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                    }
            
                    let location =  await Location.getCurrentPositionAsync({})
                    
                    
                    setCurLng(location.coords.longitude)
                    setCurLat(location.coords.latitude)
                    setLoading(false)
                    
                })()
            },[hole])
    
    
    
    const OnPressFunction = (e) => {
        if (curLat === undefined  || curLat === undefined || curLat === 0  || curLat === 0){
            console.log('error');
            //console.log(curLng);
            Alert.alert('Yritä uudestaan')
        } else {
          setFront(distance(e.front.lat, e.front.long, curLat, curLng))
          setLeft(distance(e.left.lat, e.left.long, curLat, curLng))
          setBack(distance(e.back.lat, e.back.long, curLat, curLng))
          setRight(distance(e.right.lat, e.right.long, curLat, curLng))
          setLoading(true)
          setHole(e.id)
          
        }
    }

    
    return (
        <View style={styles.container}>
            {
                GREENS.map((green) => (
                    <View key={green.id} style={styles.item}>
                        <TouchableHighlight 
                            style={styles.button} 
                            onPress={() => 
                                OnPressFunction(green)    
                            }>
                            <Text style={styles.text} >
                                # {green.id}
                            </Text>
                        </TouchableHighlight>
                    </View>
                ))
            }
             <View style={styles.greenContainer}>
                {loading ?( <View><Text>Ladataan</Text></View>) :
                <View style={styles.green}>
                    <Text style={{position: 'relative',top: -10, left: '45%', fontSize:19, fontWeight: 'bold'}}>{!back ? '000' : back} m</Text> 
                    <Text style={{position: 'relative', top: 10, fontSize:19, fontWeight: 'bold'}}>{!left ? '000' : left} m</Text> 
                    <Text style={{position: 'relative',top: -10, left: '90%', fontSize:19, fontWeight: 'bold'}}>{!right ? '000' : right} m</Text>  
                    <Text style={{position: 'relative',bottom: -25, left: '45%', fontSize:19, fontWeight: 'bold'}}>{!front ? '000' : front} m</Text> 
                    <Text style={{position: 'relative',fontSize:19, fontWeight: 'bold'}}>{!hole ? '' : '#' + hole}</Text>  
                
                </View>
}
            </View> 
            
        </View>

    )
}
 export default MainView

 const styles = StyleSheet.create({
    greenContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7ddd66',
        borderRadius: 15,
        padding: 20
    },
    green: {
        borderRadius: '50%',
        backgroundColor: 'green',
        border: ' solid white',
        height: 100,
        width: '50%'
    },
    container: {
        backgroundColor: '#F3DBDB',
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
        backgroundColor: '#40CE40',
        borderRadius: 20,
        height:50,
        maxWidth:290,
    }
})