import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../Firebase/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { globalStyles } from '../Style/AppStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, globalStyles } from "../Style/AppStyles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('LevelScreen');
    } catch (error) {
      alert('Error al iniciar sesión');
    }
  };

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientMiddle, colors.gradientEnd]}
      style={globalStyles.gradientBackground}
    >
        <View style={globalStyles.container}>
        <View style={globalStyles.container}>
          <Text style={globalStyles.title}>Iniciar Sesión</Text>

          <TextInput 
            style={globalStyles.input} 
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput 
            style={globalStyles.input} 
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
            <Text style={globalStyles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
        </View>
      </LinearGradient>
    )
}
