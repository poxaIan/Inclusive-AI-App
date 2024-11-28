// screens/ProcessScreen.tsx

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../services/types';
import { handleProcessText } from '../services/TextProcessingService'

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
  const navigation = useNavigation(); 

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
        
        <Button 
          title="Processar Texto" 
          onPress={() => handleProcessText(inputText, outputType, language, setOutputText, navigation)} 
        />
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
