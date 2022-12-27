import { StyleSheet } from 'react-native';
import { colorMain } from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorMain,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 32,
    marginBottom: 25
  },
  startStopBtn: {
    paddingHorizontal: 40,
    paddingVertical: 10
  },
  message: {
    marginBottom: 10
  },
  info: {
    color: 'white'
  }
});

export default styles;
