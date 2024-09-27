import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../services/types';

type SelectionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelectionScreen'>;

type Props = {
  navigation: SelectionScreenNavigationProp;
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SelectionScreen: React.FC<Props> = ({ navigation }) => {
  const [outputType, setOutputType] = useState('tdah');  // Padrão de saída
  const [language, setLanguage] = useState('pt');  // Idioma

  const handleProceed = () => {
    navigation.navigate('ProcessScreen', { outputType, language });
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
            <Text style={styles.radioText}>TDAH</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.radioButton, outputType === 'tea' ? styles.radioSelected : null]} 
            onPress={() => setOutputType('tea')}
          >
            <Text style={styles.radioText}>TEA</Text>
          </TouchableOpacity>
        </View>

        <Text>Escolha o idioma:</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity 
            style={[styles.radioButton, language === 'pt' ? styles.radioSelected : null]} 
            onPress={() => setLanguage('pt')}
          >
            <Text style={styles.radioText}>Português</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.radioButton, language === 'en' ? styles.radioSelected : null]} 
            onPress={() => setLanguage('en')}
          >
            <Text style={styles.radioText}>Inglês</Text>
          </TouchableOpacity>
        </View>

        <Button title="Prosseguir" onPress={handleProceed} />
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
    color: '#333',
  },
});

export default SelectionScreen;
