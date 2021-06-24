import React, { useState } from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

import pokeball from '../images/pokeball.png';

interface CardProps extends TouchableOpacityProps {
  index: number;
  name: string;
  onPressFunction: (data: { name: string; index: number }) => void;
  isFound: boolean;
}

const Card: React.FC<CardProps> = ({
  name,
  onPressFunction,
  isFound,
  index,
  children,
}) => {
  const [isFlipped, setIsFlipped] = useState(true);

  const handlePress = () => {
    onPressFunction({ name, index });
    setIsFlipped(false);

    setTimeout(() => {
      setIsFlipped(true);
    }, 1000);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      {isFound ? (
        <>{children}</>
      ) : isFlipped ? (
        <Image source={pokeball} />
      ) : (
        <>{children}</>
      )}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    margin: 5,
  },
});
