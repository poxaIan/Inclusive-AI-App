// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProcessScreen from './src/screens/ProcessScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho na tela Home
        />
        <Stack.Screen name="Process" component={ProcessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
