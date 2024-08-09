import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../../styles/ThemStyles'

const BottonP3 = () => {
  return (
    <TouchableOpacity style={styles.bottonMaI}>
        <Text style={styles.TextoBi}> {'>='}</Text>
    </TouchableOpacity>
  )
}

export default BottonP3
