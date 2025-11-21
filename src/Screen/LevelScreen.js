import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, levelStyles, globalStyles } from '../Style/AppStyles';

export default function LevelScreen({ navigation }) {
  const [unlockedLevels, setUnlockedLevels] = useState([1]);
  const [bestScore, setBestScore] = useState(null);
  const levels = [1, 2, 3, 4];

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedLevels = await AsyncStorage.getItem('unlockedLevels');
        if (savedLevels) setUnlockedLevels(JSON.parse(savedLevels));
        else await AsyncStorage.setItem('unlockedLevels', JSON.stringify([1]));

        const savedBest = await AsyncStorage.getItem('bestScore');
        if (savedBest) setBestScore(JSON.parse(savedBest));
      } catch (e) {
        console.log('Error cargando datos:', e);
      }
    };
    loadData();
  }, []);

  const handleLevelPress = (lvl) => {
    navigation.navigate('QuestionarioScreen', { level: lvl, unlockedLevels });
  };

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientMiddle, colors.gradientEnd]}
      style={globalStyles.gradientBackground}
    >
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20, alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={levelStyles.levelTitle}>Niveles</Text>

        {bestScore && (
          <TouchableOpacity
            style={[levelStyles.levelBox, { backgroundColor: colors.buttonBlue }]}
            onPress={() => navigation.navigate('MejorPartidaScreen')}
          >
            <Text style={levelStyles.levelText}>
              Mejor partida: Nivel {bestScore.level} - {Number(bestScore.averageScore).toFixed(2)}
            </Text>
          </TouchableOpacity>
        )}

        {levels.map((lvl) => (
          <TouchableOpacity
            key={lvl}
            style={[levelStyles.levelBox, !unlockedLevels.includes(lvl) && levelStyles.lockedLevel]}
            disabled={!unlockedLevels.includes(lvl)}
            onPress={() => handleLevelPress(lvl)}
          >
            <Text style={levelStyles.levelText}>Nivel {lvl}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}
