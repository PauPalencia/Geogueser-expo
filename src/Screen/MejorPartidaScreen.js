import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../Style/AppStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, globalStyles } from "../Style/AppStyles";

export default function MejorPartidaScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Mejor Partida</Text>

      <Text style={globalStyles.subtitle}>Aquí se mostrará tu mejor puntuación</Text>

      <TouchableOpacity 
        style={globalStyles.button}
        onPress={() => navigation.navigate('LevelScreen')}
      >
        <Text style={globalStyles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}
