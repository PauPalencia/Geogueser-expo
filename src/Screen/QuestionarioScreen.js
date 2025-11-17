// src/Screen/QuestionarioScreen.js

import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../Style/AppStyles";
import Questions from "../Data/Questions";
import { saveGameResult } from "../Firebase/FirestoreFuncions.js";
import { LinearGradient } from 'expo-linear-gradient';
import { colors, globalStyles } from "../Style/AppStyles";

export default function QuestionarioScreen({ route, navigation }) {
  const { level } = route.params;
  const questions = Questions[level - 1];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [results, setResults] = useState([]);
  const mapRef = useRef();

  const question = questions[currentIndex];

  // cálculo distancia por Haversine
  function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) ** 2;

    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  }

  function calcScore(distance) {
    let score = Math.max(0, 10000 - distance * 200);
    return Math.round(score);
  }

  const handleSelect = () => {
    if (!selectedPoint) return;

    const distance = getDistance(
      selectedPoint.latitude,
      selectedPoint.longitude,
      question.lat,
      question.lng
    );

    const pts = calcScore(distance);

    const newEntry = {
      question: question.text,
      score: pts,
      lat: question.lat,
      lng: question.lng,
      userLat: selectedPoint.latitude,
      userLng: selectedPoint.longitude
    };

    setResults((prev) => [...prev, newEntry]);

    if (currentIndex === questions.length - 1) {
      const totalScore = [...results, newEntry].reduce((a, b) => a + b.score, 0);

      saveGameResult(level, [...results, newEntry], totalScore);

      navigation.navigate("ResultadoScreen", {
        results: [...results, newEntry],
        totalScore,
        maxScore: questions.length * 10000,
      });
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedPoint(null);
    }
  };

  return (
    <View style={globalStyles.containerGradient}>
      <View style={{ flexDirection: "row", justifyContent: "flex-end", padding: 10 }}>
        <TouchableOpacity
          onPress={() =>
            Alert.alert("Salir", "¿Seguro que quieres salir? No se guardará el progreso.", [
              { text: "Cancelar", style: "cancel" },
              { text: "Salir", onPress: () => navigation.navigate("LevelSelect") }
            ])
          }
          style={globalStyles.exitBtn}
        >
          <Ionicons name="close" size={20} color="#fff" />
          <Text style={globalStyles.exitBtnText}>Salir</Text>
        </TouchableOpacity>
      </View>

      <Text style={globalStyles.questionCounter}>
        Pregunta {currentIndex + 1}/{questions.length}
      </Text>
      <Text style={globalStyles.questionText}>{question.text}</Text>

      <MapView
        ref={mapRef}
        style={globalStyles.map}
        initialRegion={{
          latitude: 20,
          longitude: 0,
          latitudeDelta: 100,
          longitudeDelta: 100,
        }}
        mapType="satellite"
        onPress={(e) => setSelectedPoint(e.nativeEvent.coordinate)}
      >
        {selectedPoint && (
          <Marker
            coordinate={selectedPoint}
            pinColor="red"
          />
        )}
      </MapView>

      <TouchableOpacity style={globalStyles.selectBtn} onPress={handleSelect}>
        <Ionicons name="location" size={20} color="#fff" />
        <Text style={globalStyles.selectBtnText}>
          {currentIndex === questions.length - 1 ? "Finalizar" : "Seleccionar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
