import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import { questionStyles, globalStyles, colors } from '../Style/AppStyles';
import Questions from '../Data/Questions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function QuestionarioScreen({ route, navigation }) {
  const { level, unlockedLevels: initialUnlockedLevels } = route.params;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 40.4168,
    longitude: -3.7038,
  });
  const [unlockedLevels, setUnlockedLevels] = useState(initialUnlockedLevels || [1]);

  const question = Questions[level][index];

  const handleNext = async () => {
    const { latitude, longitude } = selectedLocation;
    const dist = Math.sqrt(Math.pow(latitude - question.lat, 2) + Math.pow(longitude - question.lng, 2));
    const score = Math.max(0, 100 - dist * 10);

    const newAns = [
      ...answers,
      { question: question.text, selectedOption: { ...selectedLocation }, distance: dist, score }
    ];

    setAnswers(newAns);

    // 🔓 Desbloquear siguiente nivel
    const nextLevel = level + 1;
    if (!unlockedLevels.includes(nextLevel) && nextLevel <= 4) {
      const updatedUnlockedLevels = [...unlockedLevels, nextLevel];
      setUnlockedLevels(updatedUnlockedLevels);
      await AsyncStorage.setItem('unlockedLevels', JSON.stringify(updatedUnlockedLevels));
    }

    if (index + 1 < Questions[level].length) setIndex(index + 1);
    else
      navigation.replace('ResultadoScreen', {
        level,
        answers: newAns
      });
  };

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientMiddle, colors.gradientEnd]}
      style={globalStyles.gradientBackground}
    >
      <View style={questionStyles.container}>
        <Text style={questionStyles.questionText}>
          Pregunta {index + 1}/{Questions[level].length}
        </Text>

        <View style={questionStyles.questionContainer}>
          <Text style={questionStyles.questionText}>{question.text}</Text>
        </View>

        <MapView
          style={questionStyles.map}
          initialRegion={{
            latitude: 40.4168,
            longitude: -3.7038,
            latitudeDelta: 10,
            longitudeDelta: 10,
          }}
          onRegionChange={(region) =>
            setSelectedLocation({ latitude: region.latitude, longitude: region.longitude })
          }
        >
          <Marker coordinate={selectedLocation} anchor={{ x: 0.5, y: 0.5 }} pinColor="red" />
        </MapView>

        <TouchableOpacity style={globalStyles.button} onPress={handleNext}>
          <Text style={globalStyles.buttonText}>
            {index + 1 === Questions[level].length ? 'Finalizar' : 'Siguiente'}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
