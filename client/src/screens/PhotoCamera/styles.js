import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 50,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  toggleCamera: {
    position: 'absolute',
    right: 20
  },
  shootPhoto: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: 'lightgray',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 50
  }
});

export default styles;
