import { useEffect } from 'react';
import { View, ImageBackground, Dimensions, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import { mainAtions } from '../../store/mainSlice';
import Button from '../../components/UI/Button/Button';

import styles from './styles';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

function Photo({ navigation, route }) {
  const dispatch = useDispatch();
  const uri = route.params.uri;

  const deletePhoto = () => {
    Alert.alert(
      'Delete photo',
      'Are you sure?',
      [
        { text: 'Cancel' },
        {
          text: 'OK',
          onPress: () => {
            dispatch(mainAtions.deletePhoto(uri));
            navigation.navigate('Gallery');
          }
        }
      ],
      { cancelable: true }
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button text="Delete" onPress={deletePhoto} propStyles={styles.button}>
          <MaterialIcons name="delete" style={styles.icon} />
        </Button>
      )
    });
  }, [navigation]);

  return (
    <View>
      <ImageBackground
        source={{ uri }}
        style={{ height: deviceHeight, width: deviceWidth }}
      />
    </View>
  );
}

export default Photo;
