import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../services/types';

type OutputScreenRouteProp = RouteProp<RootStackParamList, 'OutputScreen'>;

type Props = {
  route: OutputScreenRouteProp;
};

const OutputScreen: React.FC<Props> = ({ route }) => {
  const { outputText } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Saída da IA:</Text>
      <Text style={styles.output}>{outputText}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  output: {
    fontSize: 16,
    color: '#333',
  },
});

export default OutputScreen;
