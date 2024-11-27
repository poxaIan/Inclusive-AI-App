import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SelectionScreen from './src/screens/SelectionScreen';
import ProcessScreen from './src/screens/ProcessScreen';
import OutputScreen from './src/screens/OutputScreen'; 
import { RootStackParamList } from './src/services/types';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SelectionScreen" component={SelectionScreen} />
        <Stack.Screen name="ProcessScreen" component={ProcessScreen} />
        <Stack.Screen name="OutputScreen" component={OutputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
