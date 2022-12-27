import { StyleSheet } from 'react-native';
import { colorMain } from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorMain,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    alignItems: 'center',
    width: 300
  },
  header: {
    marginBottom: 15
  },
  input: {
    width: '100%',
    marginBottom: 12,
    padding: 10,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 4,
    color: 'white',
    fontSize: 16
  },
  button: {
    marginTop: 15
  }
});

export default styles;
