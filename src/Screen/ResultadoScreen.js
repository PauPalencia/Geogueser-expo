import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, resultsStyles, globalStyles } from '../Style/AppStyles';

export default function ResultadoScreen({ route, navigation }) {
  const { level, answers } = route.params || {};
  const safeAnswers = Array.isArray(answers) ? answers : [];

  const totalScore =
    safeAnswers.length > 0
      ? safeAnswers.reduce((acc, a) => acc + (a.score || 0), 0) / safeAnswers.length
      : 0;

  const [bestScore, setBestScore] = useState(null);

  useEffect(() => {
    const saveBest = async () => {
      try {
        const saved = await AsyncStorage.getItem('bestScore');
        const savedObj = saved ? JSON.parse(saved) : null;

        if (!savedObj || totalScore > savedObj.averageScore) {
          const newBest = { answers: safeAnswers, level: level || 0, averageScore: totalScore };
          await AsyncStorage.setItem('bestScore', JSON.stringify(newBest));
          setBestScore(newBest);
        } else {
          setBestScore(savedObj);
        }
      } catch (e) {
        console.log('Error guardando mejor puntuación:', e);
      }
    };
    saveBest();
  }, []);

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientMiddle, colors.gradientEnd]}
      style={globalStyles.gradientBackground}
    >
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={resultsStyles.resultsTitle}>
          Resultados Nivel {level ?? "Invitado"}
        </Text>
        <Text style={resultsStyles.totalScoreText}>
          Puntuación media: {totalScore.toFixed(2)}
        </Text>

        {safeAnswers.length > 0 ? (
          safeAnswers.map((a, idx) => {
            const lat = a?.selectedOption?.latitude;
            const lng = a?.selectedOption?.longitude;
            const score = Number(a?.score || 0);
            return (
              <View key={idx} style={resultsStyles.answerBox}>
                <Text style={resultsStyles.answerText}>Pregunta: {a?.question ?? "N/A"}</Text>
                <Text style={resultsStyles.answerText}>
                  Tu respuesta: {lat != null && lng != null ? `${lat.toFixed(5)}, ${lng.toFixed(5)}` : "Sin respuesta"}
                </Text>
                <Text style={resultsStyles.answerText}>Puntuación: {score.toFixed(2)}</Text>
              </View>
            );
          })
        ) : (
          <Text style={resultsStyles.answerText}>No se han respondido preguntas.</Text>
        )}

        <TouchableOpacity
          style={[resultsStyles.resultButton, { marginTop: 20 }]}
          onPress={() => navigation.navigate('LevelScreen')}
        >
          <Text style={resultsStyles.resultButtonText}>Volver a niveles</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}
