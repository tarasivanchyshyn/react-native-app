import { StyleSheet } from 'react-native';
import { colorMain, colorFacebook, colorGoogle } from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorMain,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    alignItems: 'center',
    width: 300,
    marginTop: 100
  },
  headerContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginLeft: 7,
    fontSize: 32,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 5
  },
  actions: {
    alignItems: 'center',
    width: '100%'
  },
  button: {
    marginVertical: 15,
    width: '100%'
  },
  buttonFacebook: {
    marginVertical: 15,
    backgroundColor: colorFacebook,
    width: '100%'
  },
  buttonGoogle: {
    backgroundColor: colorGoogle,
    width: '100%'
  },
  iconLoginSmall: {
    marginLeft: 5,
    fontSize: 25,
    color: 'white'
  },
  iconFacebook: {
    fontSize: 25,
    marginLeft: 5,
    color: 'white'
  },
  iconGoogle: {
    fontSize: 25,
    marginLeft: 5,
    color: 'white'
  },
  loginOption: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'red'
  },
  loginOptionHeader: {
    color: 'lightgray'
  },
  loginOptionLink: {
    marginLeft: 5,
    fontSize: 18,
    color: 'white'
  },
  or: {
    color: 'white',
    marginTop: 10
  }
});

export default styles;
