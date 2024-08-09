import React from 'react'
import { Button, Text, TextInputComponent, View } from 'react-native'
import CajCom from '../comoponents/CajCom'
import { createStackNavigator } from '@react-navigation/stack';
import { CommonActions, useNavigation } from '@react-navigation/native';

const Formulario = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation();
  return (
    <View >
        <CajCom>
          <Text >Formulario:</Text>

        <View >
            <TextInputComponent placeholder='Nombre'/>
            <TextInputComponent placeholder='Apellido'/>
            <TextInputComponent placeholder='Correo'/>
            <TextInputComponent placeholder='Contraseña'/>
        </View>

        </CajCom>
        
        <Button title='REGRESAR'
        onPress={() =>navigation.dispatch(CommonActions.navigate({name: 'HOME'})) }
        />
    </View>
  )
}

export default Formulario
