// src/Components/QuestionCard.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function QuestionCard({ index, question, score, isBest }) {
  return (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        {/* Índice (Pregunta 1, Pregunta 2...) */}
        <Text style={styles.questionIndex}>Pregunta {index + 1}</Text>

        {/* Texto de la pregunta */}
        <Text style={styles.questionText}>{question}</Text>
      </View>

      {/* Puntuación a la derecha */}
      <Text style={styles.scoreText}>{score}</Text>

      {/* Estrella si es la mejor pregunta */}
      {isBest && (
        <Ionicons name="star" size={28} color="#8800FF" style={styles.starIcon} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4D0080', // morado
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSection: {
    flex: 1,
  },
  questionIndex: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  questionText: {
    fontSize: 14,
    color: '#DCDCDC',
    marginTop: 2,
  },
  scoreText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  starIcon: {
    marginLeft: 6,
  },
});
