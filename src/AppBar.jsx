import { View, StyleSheet, Text, Button } from 'react-native';
import Constants from 'expo-constants';
import { YellowBox } from 'react-native-web';
import { Link } from 'react-router-native';
import { Pressable } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#888', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    color: '#D1E83E',
    
  },
  linkBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  link: {
    padding: 5,
    backgroundColor: '#534682',
    borderRadius: 10,
    
  }
});

const AppBar = ({name}) => {
  
  return ( 
  <View style={styles.container}>
    <Text style={styles.text}>Aura Golf</Text>
    <Pressable onPress={() => {console.log('123')}}><Text>Refresh</Text></Pressable>
    <View style={styles.linkBar}>
        <Link to={'/'} style={styles.link}>
            <Text>Main</Text>
        </Link>
        <Link to={'/signin'} style={styles.link}>
            <Text>Sign in</Text>
        </Link>
        <Link to={'/jotain'} style={styles.link}>
            <Text>BMI</Text>
        </Link>
    </View>
    
  </View>
  )
};

export default AppBar;