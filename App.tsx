import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Panta1 from './src/screens/Panta1';
import { styles } from './styles/ThemStyles';

export default function App() {
  return (
    <View style={styles.Fondo} >
      <Panta1/>
      
    </View>
    
  );
}


