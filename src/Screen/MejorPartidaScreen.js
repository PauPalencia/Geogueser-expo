import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, resultsStyles, globalStyles } from '../Style/AppStyles';

export default function MejorPartidaScreen({ navigation }) {
  const [best, setBest] = useState(null);

  useEffect(() => {
    const loadBest = async () => {
      const saved = await AsyncStorage.getItem('bestScore');
      if (saved) setBest(JSON.parse(saved));
    };
    loadBest();
  }, []);

  if (!best)
    return (
      <LinearGradient colors={[colors.gradientStart, colors.gradientMiddle, colors.gradientEnd]} style={globalStyles.gradientBackground}>
        <View style={globalStyles.container}>
          <Text style={resultsStyles.resultsTitle}>Cargando...</Text>
        </View>
      </LinearGradient>
    );

  return (
    <LinearGradient colors={[colors.gradientStart, colors.gradientMiddle, colors.gradientEnd]} style={globalStyles.gradientBackground}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={resultsStyles.resultsTitle}>Mejor partida - Nivel {best.level}</Text>
        <Text style={resultsStyles.totalScoreText}>Puntuación media: {best.averageScore.toFixed(2)}</Text>

        {best.answers.map((a, idx) => (
          <View key={idx} style={resultsStyles.answerBox}>
            <Text style={resultsStyles.answerText}>Pregunta: {a.question}</Text>
            <Text style={resultsStyles.answerText}>
              Tu respuesta: {a.selectedOption ? `${a.selectedOption.latitude.toFixed(5)}, ${a.selectedOption.longitude.toFixed(5)}` : 'No respondida'}
            </Text>
            <Text style={resultsStyles.answerText}>Puntuación: {(a.score || 0).toFixed(2)}</Text>
          </View>
        ))}

        <TouchableOpacity style={[resultsStyles.resultButton, { marginTop: 20 }]} onPress={() => navigation.navigate('LevelScreen')}>
          <Text style={resultsStyles.resultButtonText}>Volver a niveles</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}
