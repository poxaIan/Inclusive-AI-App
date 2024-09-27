import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native'; // Importa RouteProp para definir o tipo de rota
import { RootStackParamList } from '../services/types'; // Importa os tipos definidos
import { processWithOllama } from '../services/OllamaService'; // Ajuste o caminho conforme necessário


type ProcessScreenRouteProp = RouteProp<RootStackParamList, 'ProcessScreen'>; // Define o tipo de rota para a tela

type Props = {
  route: ProcessScreenRouteProp;
};

const ProcessScreen: React.FC<Props> = ({ route }) => {
  const { outputType, language } = route.params;  // Recebe os parâmetros da tela anterior
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleProcessText = async () => {
    try {
      console.log("Enviando o texto para o Ollama...");

      let prompt = '';

      if (outputType === 'tdah') {
        prompt = `Por favor, resuma o seguinte texto em uma lista organizada, destacando os pontos principais em tópicos curtos e fáceis de entender. Cada tópico deve conter uma ideia clara e objetiva. Utilize uma estrutura de tópicos com frases curtas, que ajudem a manter o foco do leitor. \n\n Texto: ${inputText}`;
      } else if (outputType === 'tea') {
        prompt = `Explique o seguinte texto de forma simples e clara. Organize as ideias em tópicos, usando uma linguagem direta e precisa. Evite metáforas, ironias ou ambiguidades. Certifique-se de que cada frase contenha apenas uma ideia, para facilitar a compreensão. \n\n Texto: ${inputText}`;
      }

      console.log("Prompt: ", prompt);

      // Zera a resposta acumulada
      setOutputText('');

      // Envia o texto com a mensagem personalizada para a IA
      const response = await processWithOllama(prompt, outputType, language, handlePartialResponse);
      console.log("Resposta completa recebida: ", response);
    } catch (error) {
      console.error("Erro ao processar o texto:", error);
      setOutputText("Erro ao processar o texto.");
    }
  };

  const handlePartialResponse = (partialResponse: string) => {
    setOutputText((prevText) => prevText + partialResponse);
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
        <ScrollView style={styles.outputContainer}>
          <Text style={styles.outputTitle}>Saída da IA:</Text>
          <Text style={styles.output}>{outputText}</Text>
        </ScrollView>
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
    maxHeight: 200,
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
