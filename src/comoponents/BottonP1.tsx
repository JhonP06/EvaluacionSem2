import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../styles/ThemStyles'
import Img1 from '../screens/Img1';
import { CommonActions, NavigationContainer, useNavigation } from '@react-navigation/native';

const BottonP1 = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity 
    style = {styles.bottonIm1}>
    
    <Text style={styles.TextoBi}>IMAGEN 1</Text>
    <Button title='REGRESAR'
        onPress={() =>navigation.dispatch(CommonActions.navigate({name: 'Img1'})) }
        />
    </TouchableOpacity>
  )
}

export default BottonP1
