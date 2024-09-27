import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SelectionScreen from './src/screens/SelectionScreen';
import ProcessScreen from './src/screens/ProcessScreen';
import { RootStackParamList } from './src/services/types'; // Importa os tipos

const Stack = createStackNavigator<RootStackParamList>(); // Usa os tipos corretamente

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="SelectionScreen" component={SelectionScreen} options={{ title: 'Seleção' }} />
        <Stack.Screen
          name="ProcessScreen"
          component={ProcessScreen}
          options={{ title: 'Processamento' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
