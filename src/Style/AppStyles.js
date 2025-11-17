import { StyleSheet } from 'react-native';

/* 🎨 PALETA DE COLORES PRINCIPAL */
export const colors = {
  gradientStart: '#3A97C1', // Inicio degradado (azul cielo)
  gradientMiddle: '#6355C8', // Medio (morado)
  gradientEnd: '#8400FF', // Final (morado fuerte)
  
  purple: '#4D0080',
  panelPurple: '#6750A4',
  panelLocked: 'rgba(103,80,164,0.4)',

  playHighlight: '#8800FF',
  buttonBlue: '#0088CC',
  exitButton: '#4D0080',
  white: '#FFFFFF',
  black: '#000000'
};

/* 🌍 ESTILOS GLOBALES */
export const globalStyles = StyleSheet.create({
  // Estructura base de pantalla
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  // Para pantallas con fondo degradado
  gradientBackground: {
    flex: 1,
  },

  // Centrado rápido
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Texto blanco general
  textWhite: {
    color: colors.white,
  },

  // Botón base
  button: {
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonBlue,
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Tarjeta genérica
  roundedCard: {
    borderRadius: 25,
    padding: 14,
    marginVertical: 8,
    backgroundColor: colors.purple,
  },
});



/* 🔐 LOGIN SCREEN */
export const loginStyles = StyleSheet.create({
  input: {
    width: '80%',
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 20,
  },
});



/* 🎮 LEVELS SCREEN */
export const levelStyles = StyleSheet.create({
  levelButton: {
    width: 250,
    padding: 14,
    backgroundColor: '#1f1f1f',
    marginVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#00c853',
  },

  lockedLevel: {
    backgroundColor: '#2b2b2b',
    borderColor: '#555',
  },

  levelText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
});



/* ❓ QUESTION SCREEN */
export const questionStyles = StyleSheet.create({
  questionText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 20,
  },

  answerButton: {
    width: '85%',
    padding: 12,
    backgroundColor: colors.panelPurple,
    borderRadius: 14,
    marginVertical: 8,
  },

  correctAnswer: {
    backgroundColor: '#2ecc71',
  },

  wrongAnswer: {
    backgroundColor: '#e74c3c',
  },

  answerText: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
  },
});



/* 🏁 RESULT SCREEN */
export const resultsStyles = StyleSheet.create({
  resultsTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 15,
  },

  totalScoreText: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 20,
  },

  progressBarContainer: {
    height: 14,
    backgroundColor: '#8A63D2',
    borderRadius: 10,
    marginVertical: 20,
    overflow: 'hidden',
    width: '85%',
  },

  progressBarFill: {
    height: '100%',
    backgroundColor: colors.buttonBlue,
    borderRadius: 10,
  },

  resultButton: {
    marginTop: 15,
    backgroundColor: colors.buttonBlue,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    width: '80%',
  },
});
