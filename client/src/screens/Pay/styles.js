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
    marginBottom: 50
  },
  googleIcon: {
    marginLeft: 10,
    fontSize: 20,
    color: 'white'
  },
  googleIconText: {
    marginLeft: 4,
    fontSize: 25,
    fontWeight: '300',
    color: 'white'
  },
  appleIcon: {
    marginLeft: 5,
    fontSize: 25,
    color: 'white'
  }
});

export default styles;
