import React, { useState } from 'react';
import {
  Platform,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  TextInput,
  Alert,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../../components/Button';

import background from '../../images/background.jpeg';
import pikachuUm from '../../images/pikachu-user1.png';
import pikachuDois from '../../images/pikachu-user2.png';

import styles from './styles';
import colors from '../../styles/colors';

const UserIdentification: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handlePlay() {
    if (!name) return Alert.alert('Me diz como chamá-lo... 😢');

    await AsyncStorage.setItem('@memorygame:user', name);

    navigation.navigate('MemoryGame');
  }

  return (
    <ImageBackground source={background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.form}>
              <View style={styles.header}>
                {isFilled ? (
                  <Image source={pikachuDois} style={styles.image} />
                ) : (
                  <Image source={pikachuUm} style={styles.image} />
                )}
                <Text style={styles.title}>Como podemos{'\n'}chamar você?</Text>
              </View>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.yellow },
                ]}
                placeholder="Digite seu nome"
                placeholderTextColor="#7BB4E3"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <View style={styles.footer}>
                <Button title="Começar" onPress={handlePlay} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default UserIdentification;
