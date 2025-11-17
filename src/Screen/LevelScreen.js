import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../Style/AppStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from "../Style/AppStyles";

export default function LevelScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Selecciona Nivel</Text>

      <TouchableOpacity 
        style={globalStyles.button}
        onPress={() => navigation.navigate('QuestionarioScreen')}
      >
        <Text style={globalStyles.buttonText}>Comenzar Nivel 1</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={globalStyles.button}
        onPress={() => navigation.navigate('MejorPartidaScreen')}
      >
        <Text style={globalStyles.buttonText}>Mejor Partida</Text>
      </TouchableOpacity>
    </View>
  );
}
