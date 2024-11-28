import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../services/types';
import { processLink } from '../services/processLink';
import { handleProcessText } from '../services/TextProcessingService';

type SelectionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelectionScreen'>;

type Props = {
  navigation: SelectionScreenNavigationProp;
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SelectionScreen: React.FC<Props> = ({ navigation }) => {
  const [outputType, setOutputType] = useState('tdah');
  const [language, setLanguage] = useState('pt');
  const [isLinkMode, setIsLinkMode] = useState(false); // Botão "ligado/desligado"
  const [linkText, setLinkText] = useState(''); // Texto do link
  const [outputText, setOutputText] = useState(''); // Estado para armazenar o texto processado

  const handleProceed = async () => {
    if (isLinkMode) {
      if (!linkText.trim()) {
        alert('Por favor, insira um link válido.');
        return;
      }

      try {
        alert('Processando o link, aguarde...');
        
        // Processa o link (extração do texto)
        const processedText = await processLink(linkText, outputType, language);
        console.log("Texto do link: ", processedText);
        
        // Agora chama o serviço de processamento de texto
        await handleProcessText(processedText, outputType, language, setOutputText, navigation);
        
      } catch (error) {
        alert('Erro ao processar o link. Tente novamente.');
      }
    } else {
      // Para o caso de texto digitado
      navigation.navigate('ProcessScreen', {
        outputType: outputType,
        language: language,
      });
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
    <View style={styles.container}>
      <View style={styles.background}>{renderImages()}</View>
      <View style={styles.overlay}>
        <Text style={styles.title}>Selecione as Preferências</Text>

        <Text>Escolha o padrão de saída:</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={[styles.radioButton, outputType === 'tdah' ? styles.radioSelected : null]}
            onPress={() => setOutputType('tdah')}
          >
            <Text style={[styles.radioText, outputType === 'tdah' ? styles.selectedText : styles.unselectedText]}>
              TDAH
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioButton, outputType === 'tea' ? styles.radioSelected : null]}
            onPress={() => setOutputType('tea')}
          >
            <Text style={[styles.radioText, outputType === 'tea' ? styles.selectedText : styles.unselectedText]}>
              TEA
            </Text>
          </TouchableOpacity>
        </View>

        <Text>Escolha o idioma:</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={[styles.radioButton, language === 'pt' ? styles.radioSelected : null]}
            onPress={() => setLanguage('pt')}
          >
            <Text style={[styles.radioText, language === 'pt' ? styles.selectedText : styles.unselectedText]}>
              Português
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioButton, language === 'en' ? styles.radioSelected : null]}
            onPress={() => setLanguage('en')}
          >
            <Text style={[styles.radioText, language === 'en' ? styles.selectedText : styles.unselectedText]}>
              Inglês
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity
            style={[styles.radioButton, isLinkMode ? styles.radioSelected : null]}
            onPress={() => setIsLinkMode((prev) => !prev)}
          >
            <Text style={[styles.radioText, isLinkMode ? styles.selectedText : styles.unselectedText]}>
              {isLinkMode ? 'Modo Link: Ligado' : 'Modo Link: Desligado'}
            </Text>
          </TouchableOpacity>
        </View>

        {isLinkMode && (
          <TextInput
            style={[styles.input, { height: 50 }]}
            placeholder="Cole o link desejado"
            value={linkText}
            onChangeText={setLinkText}
          />
        )}

        <Button title="Prosseguir" onPress={handleProceed} />

        {/* Exibir o texto processado */}
        {outputText ? (
          <View style={styles.outputContainer}>
            <Text style={styles.outputText}>{outputText}</Text>
          </View>
        ) : null}
      </View>
    </View>
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
    opacity: 0.5,  // Define a opacidade das imagens
  },
  overlay: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Leve opacidade para melhorar a legibilidade
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
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  radioButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    width: '40%',
    alignItems: 'center',
  },
  radioSelected: {
    backgroundColor: '#3b5998',
  },
  radioText: {
    fontSize: 16,
    fontWeight: 'bold', // Gordinho, independente da seleção
  },
  selectedText: {
    color: 'white', // Cor do texto selecionado
  },
  unselectedText: {
    color: 'black', // Cor do texto não selecionado
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  outputContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    width: '100%',
  },
  outputText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default SelectionScreen;
