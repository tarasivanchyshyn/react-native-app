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
    marginBottom: 30
  },
  configuration: {
    textAlign: 'center',
    width: '70%',
    marginBottom: 15
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    width: 100,
    fontSize: 20,
    color: 'white'
  },
  message: {
    color: 'lightgray'
  }
});

export default styles;
