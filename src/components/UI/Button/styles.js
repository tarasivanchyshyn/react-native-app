import { StyleSheet } from 'react-native';
import { colorBtnMain } from '../../../constants/styles';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: colorBtnMain,
    color: 'white',
    borderRadius: 4
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default styles;
