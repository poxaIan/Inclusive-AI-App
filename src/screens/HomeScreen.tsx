// src/screens/HomeScreen.tsx
import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions, Easing, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../services/types';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const animatedTime = 64000;

type HomeScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loopAnimation = () => {
      Animated.loop(
        Animated.parallel([
          Animated.timing(translateX, {
            toValue: -screenWidth,  // Move para a esquerda até o final da tela
            duration: animatedTime,  // Duração da animação
            easing: Easing.linear,  // Animação linear
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: -screenHeight,  // Move para cima até o final da tela
            duration: animatedTime,  // Mesma duração para manter o movimento uniforme
            easing: Easing.linear,  // Animação linear
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    loopAnimation();
  }, [translateX, translateY]);

  const renderImages = () => {
    const images = [];
    for (let i = 0; i < 14; i++) { // Número de linhas de imagens
      images.push(
        <View key={i} style={styles.imageRow}>
          {Array.from({ length: 10 }).map((_, index) => ( // Quantidade de imagens horizontais
            <Image
              key={index}
              source={require('../assets/infinite_symbol.png')}
              style={styles.smallImage}
            />
          ))}
        </View>
      );
    }
    return images;
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.background, { transform: [{ translateX }, { translateY }] }]}>
        {renderImages()}
      </Animated.View>
      <View style={styles.overlay}>
        <Text style={styles.title}>NeuroVita</Text>
        <Text style={styles.subtitle}>IA Inclusiva</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Process')}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
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
    width: screenWidth * 4, // Faz o fundo ser largo o suficiente para o movimento
    height: screenHeight * 2, // Altura suficiente para o movimento vertical
    flexDirection: 'column',
  },
  imageRow: {
    flexDirection: 'row',
  },
  smallImage: {
    width: 120,  // Tamanho pequeno para a imagem
    height: 120,
    margin: 5,
    opacity: 0.7, // Define a opacidade para 50%
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 60, // Aumenta o tamanho da fonte
    fontWeight: 'bold',
    color: '#3b5998',
    textAlign: 'center',
    letterSpacing: 2,  // Espaçamento entre as letras
    textShadowColor: '#888', // Sombra para dar profundidade
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 28,
    color: '#555',
    textAlign: 'center',
    letterSpacing: 1.5,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#3b5998',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,  // Bordas arredondadas para um visual moderno
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6, // Efeito de elevação para o botão
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFAFA',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default HomeScreen;
