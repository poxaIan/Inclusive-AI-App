import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../services/types';
import { processWithOllama } from '../services/OllamaService';

type ProcessScreenRouteProp = RouteProp<RootStackParamList, 'ProcessScreen'>;


type Props = {
  route: ProcessScreenRouteProp;
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ProcessScreen: React.FC<Props> = ({ route }) => {
  const { outputType, language } = route.params;
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const navigation = useNavigation(); // Para navegação entre telas

  // Função para traduzir o código do idioma para uma string legível
  const getLanguageName = (lang: string) => {
    return lang === 'pt' ? 'português' : 'inglês';
  };

  const handleProcessText = async () => {
    try {
      if (!inputText.trim()) {
        setOutputText("Por favor, insira um texto para processar.");
        return;
      }
  
      console.log("Enviando o texto para o Ollama...");
  
      let prompt = '';
  
      if (outputType === 'tdah') {
        prompt = `Por favor, em ${getLanguageName(language)}, resuma o seguinte texto em uma lista organizada, destacando os pontos principais em tópicos curtos e fáceis de entender. Cada tópico deve conter uma ideia clara e objetiva. Utilize uma estrutura de tópicos com frases curtas, que ajudem a manter o foco do leitor. \n\n Texto: ${inputText}`;
      } else if (outputType === 'tea') {
        prompt = `Explique, em ${getLanguageName(language)}, o seguinte texto de forma simples e clara. Organize as ideias usando uma linguagem direta e precisa. Evite metáforas, ironias ou ambiguidades. Certifique-se de que cada frase contenha apenas uma ideia, para facilitar a compreensão. \n\n Texto: ${inputText}`;
      }
  
      console.log("Prompt: ", prompt);
  
      setOutputText("Processando...");
  
      // Processa o texto usando a função com a IA
      const response = await processWithOllama(prompt, outputType, language);
      console.log("Resposta da API:", response);
  
      if (typeof response === 'string') {
        setOutputText(response); // Atualiza o estado com a resposta da API
        navigation.navigate('OutputScreen', { outputText: response }); // Navega para a tela de saída
      } else {
        console.error("Erro: Resposta não é uma string.");
        setOutputText("Erro ao processar o texto.");
      }
    } catch (error) {
      console.error("Erro ao processar o texto:", error);
      setOutputText("Erro ao processar o texto.");
    }
  };
  
  const renderImages = () => {
    const rows = [];
    for (let i = 0; i < 7; i++) {
      rows.push(
        <View key={i} style={styles.imageRow}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Image
              key={index}
              source={require('../assets/infinite_symbol.png')}
              style={styles.smallImage}
            />
          ))}
        </View>
      );
    }
    return rows;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.background}>{renderImages()}</View>
      <View style={styles.overlay}>
        <Text style={styles.title}>Insira o texto para processar:</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Cole seu texto aqui"
          value={inputText}
          onChangeText={setInputText}
        />

        <Button title="Processar Texto" onPress={handleProcessText} />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallImage: {
    width: 120,
    height: 120,
    margin: 5,
    opacity: 0.5,
  },
  overlay: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    minHeight: 150,
    maxHeight: 300,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
});

export default ProcessScreen;
