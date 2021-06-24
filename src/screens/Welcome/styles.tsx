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
    fontSize: 36,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.white,
  },
  image: {
    width: 310,
    height: 360,
  },
});

export default styles;
