import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Img1 from '../src/screens/Img1';
import Img2 from '../src/screens/Img2';
import Formulario from '../src/screens/Formulario';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const Navigietor = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HOME"  component={Img1} />
        <Stack.Screen name="FORMULARIO" component={Img2} />
        <Stack.Screen name="FORMULARIO" component={Formulario} />
    </Stack.Navigator>
  )
}

export default Navigietor
