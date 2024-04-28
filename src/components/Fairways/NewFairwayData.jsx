import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import {Picker} from '@react-native-picker/picker'

//import addDataToGolfData from '../../../databaseQuerys';
import holedata from './holeData'

const NewFairwayData = () => {
    // getAllGolfData()
    //     .then(data => {
    //     console.log('Kaikki tiedot:', data);
    //     })
    //     .catch(error => {
    //     console.error('Virhe haettaessa tietoja:', error);
    //     });

    const [currentHole, setCurrentHole] = useState(currentHole !== undefined ? currentHole : '1')
    const [auragolfData, setAuragolfData] = useState(holedata.auragolf);
    const [scorePlaceholder, setScorePlaceholder] = useState('Valitse score');
    const holeNumbers = Object.keys(auragolfData).map((holeNumber) => ({
        label: `${holeNumber}. väylä`,
        value: holeNumber,
    }));
    const handleValueChange = (fieldName, value) => {
        // Kopioi auragolf-tila ja päivitä valitun väylän score-arvo
        const updatedData = { ...auragolfData };
        updatedData[currentHole][fieldName] = value;
        setAuragolfData(updatedData);
       //addDataToGolfData(fieldName, value)
      };
    const clubList = holedata.clubList
    const parList = holedata.parList
    const miss = holedata.miss
    const scoreList = holedata.scoreList

    // useEffect(() => {
    //     setScorePlaceholder(auragolfData[currentHole].score ? `${auragolfData[currentHole].score}` : 'Valitse score');
    // }, [currentHole]);
    // console.log(scorePlaceholder);
    //console.log(auragolfData);
    return (
        <View style={styles.container}>
            <Text style={styles.formLabel}>demo</Text>
            <View>
                <Text
                    style={{
                        fontSize: 30,
                        color: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    Selected: {currentHole} hole
                </Text>
                
                <Picker
                    selectedValue={currentHole}
                    onValueChange={currentHole => setCurrentHole(currentHole)}
                    >
                    {holeNumbers.map(hole =>
                    <Picker.Item key= {hole.label} label={hole.label} value={hole.value} />)}
                </Picker> 
                <RNPickerSelect
                    placeholder={{ label: scorePlaceholder, value: null}}
                    onValueChange={(score) => handleValueChange('score', score)}
                    style={pickerSelectStyles}
                    items={scoreList}
                /> 
            </View>
        </View>
    )  
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#356859',
          alignItems: 'center',
          justifyContent: 'center',
        },
      
        formLabel: {
          fontSize: 20,
          color: '#fff',
        },
        inputStyle: {
          marginTop: 20,
          width: 300,
          height: 40,
          paddingHorizontal: 10,
          borderRadius: 50,
          backgroundColor: '#b9e4c9',
        },
        formText: {
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: 20,
        },
        text: {
          color: '#fff',
          fontSize: 20,
        },
      });
      const pickerSelectStyles = StyleSheet.create({
          inputIOS: {
              fontSize: 16,
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 4,
              color: 'black',
              paddingRight: 30 // to ensure the text is never behind the icon
          }
      });
export default NewFairwayData