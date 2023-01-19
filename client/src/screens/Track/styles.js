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
    paddingVertical: 10,
    marginTop: 20
  },
  message: {
    marginBottom: 10
  },
  info: {
    color: 'white'
  },
  icon: {
    marginLeft: 5,
    fontSize: 27,
    color: 'white'
  }
});

export default styles;
