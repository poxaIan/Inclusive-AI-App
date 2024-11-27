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
      <Text style={styles.title}>Texto Processado</Text>
      <Text style={styles.text}>{outputText}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
  },
});

export default OutputScreen;
