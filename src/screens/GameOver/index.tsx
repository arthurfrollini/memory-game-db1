import React, { useState, useEffect } from 'react';
import { ImageBackground, SafeAreaView, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';

import { useTimer } from '../../contexts/Timer';
import Button from '../../components/Button';

import background from '../../images/background.jpeg';
import gameOverImage from '../../images/gameOverImage.png';
import styles from './styles';

const GameOver: React.FC = () => {
  const [userName, setUserName] = useState<string>();
  const [attempts, setAttempts] = useState<string>();

  const navigation = useNavigation();

  const { counter, clearTimer, stopTimer } = useTimer();

  function handleRestart() {
    clearTimer();
    navigation.navigate('Welcome');
  }

  useEffect(() => {
    async function loadStoragedUser() {
      const user = await AsyncStorage.getItem('@memorygame:user');
      setUserName(user || '');
    }
    async function loadStoragedAttempts() {
      const clicks = await AsyncStorage.getItem('@memorygame:attempts');
      setAttempts(clicks || '');
    }

    stopTimer();
    loadStoragedUser();
    loadStoragedAttempts();
  }, []);

  return (
    <ImageBackground source={background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>GameOver</Text>
        <Text style={styles.subtitle}>
          Parabéns <Text style={styles.variables}>{userName}</Text>, você venceu
          o jogo em <Text style={styles.variables}>{counter}s</Text> e com{' '}
          <Text style={styles.variables}>{attempts}</Text> tentativas!
        </Text>
        <Image source={gameOverImage} style={styles.image} />
        <Button title="Recomeçar!" onPress={handleRestart} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default GameOver;
