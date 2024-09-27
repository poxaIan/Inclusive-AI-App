import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../services/types'; // Defina este tipo corretamente

type SelectionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelectionScreen'>;

type Props = {
  navigation: SelectionScreenNavigationProp;
};

const SelectionScreen: React.FC<Props> = ({ navigation }) => {
  const [outputType, setOutputType] = useState('tdah');  // Padrão de saída
  const [language, setLanguage] = useState('pt');  // Idioma

  const handleProceed = () => {
    // Navega para a tela de processamento passando os parâmetros selecionados
    navigation.navigate('ProcessScreen', { outputType, language });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione as Preferências</Text>
      
      <Text>Escolha o padrão de saída:</Text>
      <Picker
        selectedValue={outputType}
        style={styles.picker}
        onValueChange={(itemValue) => setOutputType(itemValue)}>
        <Picker.Item label="TDAH" value="tdah" />
        <Picker.Item label="TEA" value="tea" />
      </Picker>

      <Text>Escolha o idioma:</Text>
      <Picker
        selectedValue={language}
        style={styles.picker}
        onValueChange={(itemValue) => setLanguage(itemValue)}>
        <Picker.Item label="Português" value="pt" />
        <Picker.Item label="Inglês" value="en" />
      </Picker>

      <Button 
        title="Prosseguir" 
        onPress={handleProceed} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});

export default SelectionScreen;
