import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import BottonP1 from '../comoponents/BottonP1';
import { styles } from '../../styles/ThemStyles';
import BottonP2 from '../comoponents/BottonP2';
import BottonP3 from '../comoponents/BottonP3';
import BottonP4 from '../comoponents/BottonP4';

const Panta1 = () => {
  return (
    <View>
        <Text style={styles.TextoBi}>BIENVENIDOS</Text>
        <BottonP1 />
        <BottonP2/>
        <BottonP3/>
        <BottonP4/>
    </View>
  )
}

export default Panta1
