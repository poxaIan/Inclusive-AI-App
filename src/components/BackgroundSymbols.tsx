import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const BackgroundSymbols = () => {
  const renderImages = () => {
    const images = [];
    // Reduzi o número de linhas e colunas
    for (let i = 0; i < 6; i++) { // Número de linhas de imagens
      images.push(
        <View key={i} style={styles.imageRow}>
          {Array.from({ length: 6 }).map((_, index) => ( // Quantidade de imagens horizontais
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
    <View style={styles.background}>
      {renderImages()}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight,
    flexDirection: 'column',
  },
  imageRow: {
    flexDirection: 'row',
  },
  smallImage: {
    width: 80,  // Reduzi o tamanho das imagens
    height: 80,
    margin: 10,
    opacity: 0.5, // Define a opacidade para 50%
  },
});

export default BackgroundSymbols;
