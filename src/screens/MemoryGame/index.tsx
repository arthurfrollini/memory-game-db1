import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTimer } from '../../contexts/Timer';

import Pokemons from '../../components/Pokemons';

import background from '../../images/background.jpeg';
import styles from './styles';

const MemoryGame: React.FC = () => {
  const [userName, setUserName] = useState<string>();

  const { counter, startTimer, stopTimer } = useTimer();

  useEffect(() => {
    async function loadStoragedUser() {
      const user = await AsyncStorage.getItem('@memorygame:user');
      setUserName(user || '');
    }
    loadStoragedUser();

    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <ImageBackground source={background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.greeting}>Olá,</Text>
            <Text style={styles.userName}>{userName}</Text>
          </View>
          <Text style={styles.timer}>Timer: {counter}s</Text>
        </View>
        <Pokemons />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MemoryGame;
