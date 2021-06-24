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
  },
  form: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 56,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.white,
    paddingHorizontal: 30,
    marginBottom: 16,
  },
  image: {
    width: 176,
    height: 176,
  },
  input: {
    fontFamily: fonts.text,
    borderBottomWidth: 2,
    width: '100%',
    borderColor: colors.white,
    color: colors.white,
    fontSize: 22,
    padding: 10,
    textAlign: 'center',
  },
  footer: {
    marginTop: 44,
    width: '100%',
  },
});

export default styles;
