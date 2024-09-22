import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import { processWithOllama } from '../services/OllamaService';

const ProcessScreen = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleProcessText = async () => {
    try {
      console.log("Enviando o texto para o Ollama...");
      const response = await processWithOllama(inputText);
      console.log("Resposta recebida: ", response);
      setOutputText(response);
    } catch (error) {
      console.error("Erro ao processar o texto:", error);
      setOutputText("Erro ao processar o texto.");
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Insira o texto para processar:</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Cole seu texto aqui"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Processar Texto" onPress={handleProcessText} />
      {outputText && (
        <View style={styles.outputContainer}>
          <Text style={styles.outputTitle}>Saída da IA:</Text>
          <Text style={styles.output}>{outputText}</Text>
        </View>
      )}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    minHeight: 150,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  outputContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    width: '100%',
  },
  outputTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  output: {
    fontSize: 16,
    color: '#333',
  },
});

export default ProcessScreen;
