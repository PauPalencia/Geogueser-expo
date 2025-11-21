import { StyleSheet } from 'react-native';

/* 🎨 PALETA DE COLORES PRINCIPAL */
export const colors = {
  gradientStart: '#3A97C1',
  gradientMiddle: '#6355C8',
  gradientEnd: '#8400FF',

  purple: '#4D0080',
  panelPurple: '#6750A4',
  panelLocked: 'rgba(103,80,164,0.4)',

  playHighlight: '#8800FF',
  buttonBlue: '#0088CC',
  exitButton: '#4D0080',
  white: '#FFFFFF',
  black: '#000000'
};

/* 🌍 ESTILOS GLOBALES (solo para cosas compartidas) */
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginTop: 80,
  },

  flex1: {
    flex: 1,
  },

  gradientBackground: {
    flex: 1,
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textWhite: {
    color: colors.white,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 20,
  },

  button: {
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonBlue,
    width: "80%",
    marginTop: 10,
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },

  // 🔥 Necesario para QuestionarioScreen
  questionPanel: {
    width: "90%",
    backgroundColor: colors.panelPurple,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    alignSelf: "center",
  },

  mapContainer: {
    width: "100%",
    height: 320,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
  },

  // 🔥 Usado en Login
  guestButton: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.exitButton,
    width: "80%",
    alignItems: "center",
    marginTop: 10,
  },

  // 🔥 Usado en niveles
  bestScoreButton: {
    backgroundColor: colors.panelPurple,
    padding: 14,
    borderRadius: 14,
    width: "80%",
    alignSelf: "center",
    marginVertical: 20,
    alignItems: "center",
  },

  // 🔥 Separación en el botón de volver en Resultados
  bottomSafeButton: {
    marginBottom: 35,
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
  levelTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 20,
    textAlign: 'center',
  },

  levelBox: {
    width: '90%',
    height: 60,
    backgroundColor: colors.purple,
    borderRadius: 15,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  lockedLevel: {
    backgroundColor: colors.panelLocked,
  },

  levelText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
  },
});


/* ❓ QUESTION SCREEN */
export const questionStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginTop: 0,
  },

  questionText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 20,
  },
  
  progressText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    paddingTop: 90,
  },

  map: {
    width: "100%",
    height: "60%",
    marginBottom: 10,
  },
  
  mapCenterIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -20,
    marginLeft: -15,
    zIndex: 10,
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

  answerBox: {
    backgroundColor: colors.panelPurple,
    borderRadius: 15,
    padding: 12,
    marginVertical: 6,
  },
  answerText: {
    color: colors.white,
    fontSize: 16,
  },
  resultButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  }

  
});

