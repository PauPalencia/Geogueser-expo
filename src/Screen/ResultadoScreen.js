// src/Screen/ResultadoScreen.js

import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import QuestionCard from "../Components/QuestionCard";
import { globalStyles } from "../Style/AppStyles";
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from "../Style/AppStyles";

export default function ResultadoScreen({ route, navigation }) {
  const { results, totalScore, maxScore = 50000 } = route.params; 
  const [bestScore, setBestScore] = useState(0);

  // Encontrar la pregunta con más puntuación
  const highestScore = Math.max(...results.map(r => r.score));

  // Porcentaje barra progreso
  const progress = (totalScore / maxScore) * 100;

  return (
    <View style={globalStyles.containerGradient}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>

        {/* Título */}
        <Text style={globalStyles.resultsTitle}>Resultados</Text>

        {/* Resumen puntuación total */}
        <Text style={globalStyles.totalScoreText}>
          Puntuación Total: {totalScore} / {maxScore}
        </Text>

        {/* Lista de preguntas con puntuaciones */}
        {results.map((item, index) => (
          <QuestionCard
            key={index}
            index={index}
            question={item.question}
            score={item.score}
            isBest={item.score === highestScore}
          />
        ))}

        {/* Barra de progreso */}
        <View style={globalStyles.progressBarContainer}>
          <View
            style={[
              globalStyles.progressBarFill,
              { width: `${progress}%` }
            ]}
          />
        </View>

        {/* Botón para volver al menú */}
        <TouchableOpacity
          style={globalStyles.mainButton}
          onPress={() => navigation.navigation.navigate("LevelSelect")
}
        >
          <Ionicons name="home" size={22} color="#fff" style={{ marginRight: 8 }} />
          <Text style={globalStyles.mainButtonText}>Main Menu</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}
