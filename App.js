import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screen/LoginScreen';
import LevelScreen from './src/Screen/LevelScreen';
import QuestionarioScreen from './src/Screen/QuestionarioScreen.js';
import ResultadoScreen from './src/Screen/ResultadoScreen';
import MejorPartidaScreen from './src/Screen/MejorPartidaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LevelScreen" component={LevelScreen} />
        <Stack.Screen name="QuestionarioScreen" component={QuestionarioScreen} />
        <Stack.Screen name="ResultadoScreen" component={ResultadoScreen} />
        <Stack.Screen name="MejorPartidaScreen" component={MejorPartidaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

