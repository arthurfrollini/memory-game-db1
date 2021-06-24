import React from 'react';
import { ImageBackground, SafeAreaView, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Button from '../../components/Button';

import background from '../../images/background.jpeg';
import welcomeImage from '../../images/welcomeImage.png';
import styles from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <ImageBackground source={background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Jogo da Memória</Text>
        <Image source={welcomeImage} style={styles.image} />
        <Button title="Jogar!" onPress={handleStart} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Welcome;
