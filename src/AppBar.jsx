import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { YellowBox } from 'react-native-web';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#888', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#D1E83E',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
  // ...
});

const AppBar = () => {
  return ( 
  <View style={styles.container}>
    <Text style={styles.text}>hello</Text>
  </View>
  )
};

export default AppBar;