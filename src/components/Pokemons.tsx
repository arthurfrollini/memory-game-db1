import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';

import beedrill from '../images/beedrill.png';
import bulbasaur from '../images/bulbasaur.png';
import butterfree from '../images/butterfree.png';
import charmander from '../images/charmander.png';
import flareon from '../images/flareon.png';
import jolteon from '../images/jolteon.png';
import pikachu from '../images/pikachu.png';
import ponyta from '../images/ponyta.png';
import psyduck from '../images/psyduck.png';
import squirtle from '../images/squirtle.png';
import starmie from '../images/starmie.png';
import vaporeon from '../images/vaporeon.png';

import Card from './Card';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

let pokemons = [
  { name: 'beedrill', image: beedrill },
  { name: 'bulbasaur', image: bulbasaur },
  { name: 'butterfree', image: butterfree },
  { name: 'charmander', image: charmander },
  { name: 'flareon', image: flareon },
  { name: 'jolteon', image: jolteon },
  { name: 'pikachu', image: pikachu },
  { name: 'ponyta', image: ponyta },
  { name: 'psyduck', image: psyduck },
  { name: 'squirtle', image: squirtle },
  { name: 'starmie', image: starmie },
  { name: 'vaporeon', image: vaporeon },
];

const pokemons2 = [...pokemons, ...pokemons];

interface CardProps {
  name: string;
  index: number;
}

function shuffle(array: any) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const Pokemons: React.FC = () => {
  const [firstPressed, setFirstPressed] = useState<CardProps>({} as CardProps);
  const [secondPressed, setSecondPressed] = useState<CardProps>(
    {} as CardProps
  );
  const [alreadyFound, setAlreadyFound] = useState<string[]>([]);
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    shuffle(pokemons2);
  }, []);

  useEffect(() => {
    async function getAttempts() {
      await AsyncStorage.setItem(
        '@memorygame:attempts',
        String(numberOfClicks)
      );
    }
    if (alreadyFound.length === pokemons.length) {
      getAttempts();
      navigation.navigate('GameOver');
    }
  }, [alreadyFound]);

  const handlePress = ({ name, index }: CardProps) => {
    if (!firstPressed.name) {
      setFirstPressed({ name, index });
    } else {
      setSecondPressed({ name, index });

      if (name === firstPressed.name && index !== firstPressed.index) {
        setAlreadyFound((state) => [...state, name]);
      }

      setNumberOfClicks((state) => state + 1);

      setFirstPressed({} as CardProps);
      setSecondPressed({} as CardProps);
    }
  };

  return (
    <>
      <View style={styles.pokemonsContainer}>
        {pokemons2.map((pokemon, index) => (
          <Card
            index={index}
            name={pokemon.name}
            key={index}
            onPressFunction={handlePress}
            isFound={alreadyFound.includes(pokemon.name)}
          >
            <Image key={index} source={pokemon.image} />
          </Card>
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>
          Tentativas: <Text style={styles.attempts}>{numberOfClicks}</Text>
        </Text>
      </View>
    </>
  );
};

export default Pokemons;

const styles = StyleSheet.create({
  pokemonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  footer: {
    marginTop: 25,
  },
  text: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.blue,
  },
  attempts: {
    color: colors.yellow,
  },
});
