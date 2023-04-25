import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Formik, useField } from 'formik';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: '85%'
  },
  someContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


const initialValues = {
  mass: '',
  height: '',
};

const getBodyMassIndex = (mass, height) => {
  return Math.round(mass / Math.pow(height, 2));
};

const BodyMassIndexForm = ({ onSubmit, intti }) => {
  const [massField, massMeta, massHelpers] = useField('mass');
  const [heightField, heightMeta, heightHelpers] = useField('height');

  return (
    <View>
      <TextInput
        placeholder="Weight (kg)"
        value={massField.value}
        onChangeText={text => massHelpers.setValue(text)}
      />
      <TextInput
        placeholder="Height (m)"
        value={heightField.value}
        onChangeText={text => heightHelpers.setValue(text)}
      />
      <Pressable onPress={onSubmit}>
        <Text>Calculate</Text>
      </Pressable>
      <Text>{intti}</Text>
      <View style={styles.someContainer}>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
      </View>
      
    </View>
  );
};

const BodyMassIndexCalculator = () => {
  const [ind, setInd] = useState(0)
  const onSubmit = values => {
    const mass = parseFloat(values.mass);
    const height = parseFloat(values.height);

    if (!isNaN(mass) && !isNaN(height) && height !== 0) {
      let i = getBodyMassIndex(mass, height)  
      console.log(`Your body mass index is: ${i}`)
      
      setInd(i)
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <BodyMassIndexForm onSubmit={handleSubmit} intti={ind}/>}
    </Formik>
  );
};
const Jotain = () => {
  return ( 
  <View style={styles.container}>
    
    <BodyMassIndexCalculator />
  </View>
  )
};

export default Jotain;