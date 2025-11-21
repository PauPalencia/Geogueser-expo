import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, levelStyles, globalStyles } from '../Style/AppStyles';

export default function LevelScreen({ route, navigation }) {
  const [unlockedLevels, setUnlockedLevels] = useState([1]);
  const [bestScore, setBestScore] = useState(null);

  useEffect(() => {
    // Cargar niveles desbloqueados desde navegación o AsyncStorage
    if (route.params?.unlockedLevels) {
      setUnlockedLevels(route.params.unlockedLevels);
    } else {
      loadUnlockedLevels();
    }

    loadBestScore();
  }, [route.params]);

  const loadUnlockedLevels = async () => {
    try {
      const saved = await AsyncStorage.getItem('unlockedLevels');
      if (saved) setUnlockedLevels(JSON.parse(saved));
    } catch (e) {
      console.log('Error cargando niveles desbloqueados:', e);
    }
  };

  const loadBestScore = async () => {
    try {
      const saved = await AsyncStorage.getItem('bestScore');
      if (saved) setBestScore(JSON.parse(saved));
    } catch (e) {
      console.log('Error cargando mejor puntuación:', e);
    }
  };

  const levels = [1, 2, 3, 4]; // solo 4 niveles por ahora

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientMiddle, colors.gradientEnd]}
      style={globalStyles.gradientBackground}
    >
      <View style={globalStyles.container}>
        <Text style={[levelStyles.levelText, { fontSize: 28, marginBottom: 20 }]}>
          Niveles
        </Text>

        {/* Mejor partida */}
        {bestScore && bestScore.averageScore != null && (
          <TouchableOpacity
            style={[levelStyles.levelBox, { marginBottom: 15 }]}
            onPress={() => navigation.navigate('MejorPartidaScreen')}
          >
            <Text style={levelStyles.levelText}>
              Mejor partida: Nivel {bestScore.level} - {Number(bestScore.averageScore).toFixed(2)}
            </Text>
          </TouchableOpacity>
        )}

        {/* Lista de niveles */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
          {levels.map((lvl) => (
            <TouchableOpacity
              key={lvl}
              style={[levelStyles.levelBox, !unlockedLevels.includes(lvl) && levelStyles.lockedLevel]}
              disabled={!unlockedLevels.includes(lvl)}
              onPress={() =>
                navigation.navigate('QuestionarioScreen', {
                  level: lvl,
                  unlockedLevels: unlockedLevels,
                })
              }
            >
              <Text style={levelStyles.levelText}>Nivel {lvl}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
