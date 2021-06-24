import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import UserIdentification from '../screens/UserIdentification';
import MemoryGame from '../screens/MemoryGame';
import GameOver from '../screens/GameOver';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <stackRoutes.Screen name="MemoryGame" component={MemoryGame} />
    <stackRoutes.Screen name="GameOver" component={GameOver} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
