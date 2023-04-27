import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';

const SignIn = () => {

    return (
        <View>
            <TextInput 
                onChangeText={text => console.log(text)} 
                placeholder={'user'}
            />
            <TextInput 
                onChangeText={text => console.log(text)} 
                placeholder={'password'}
            />
        </View>
    )
}
export default SignIn

const styles = StyleSheet.create({

})