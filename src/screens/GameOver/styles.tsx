import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 40,
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.white,
  },
  subtitle: {
    fontSize: 28,
    fontFamily: fonts.text,
    textAlign: 'center',
    color: colors.blue,
  },
  image: {
    width: 320,
    height: 360,
  },
  variables: {
    color: colors.yellow,
    fontFamily: fonts.heading,
  },
});

export default styles;
