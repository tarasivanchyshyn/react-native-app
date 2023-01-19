import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  photo: {
    width: '33.33%',
    height: 250,
    borderWidth: 1,
    borderColor: 'black'
  },
  message: {
    flex: 1,
    fontSize: 24,
    marginTop: 50,
    color: 'white',
    textAlign: 'center'
  },
  buttonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 15,
    alignItems: 'center'
  },
  button: {
    paddingHorizontal: 15
  },
  icon: {
    color: 'white',
    fontSize: 24,
    marginRight: 5
  }
});

export default styles;
