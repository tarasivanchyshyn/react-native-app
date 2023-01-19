import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import Button from '../../components/UI/Button/Button';
import { mainAtions } from '../../store/mainSlice';

import styles from './styles';

function Gallery({ navigation }) {
  const { photos } = useSelector((state) => state);
  const dispatch = useDispatch();

  const message = <Text style={styles.message}>No photos yet</Text>;
  const photosList = (
    <FlatList
      data={photos}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.photo}
          onPress={() => {
            navigation.navigate('Photo', { uri: item });
          }}
        >
          <Image source={{ uri: item }} style={{ flex: 1 }} />
        </TouchableOpacity>
      )}
      numColumns={3}
    />
  );

  const content = photos.length ? photosList : message;
  const photosCount = photos.length;

  const deleteHandler = () => {
    Alert.alert(
      'Delete all photos',
      'Are you sure?',
      [
        { text: 'Cancel' },
        { text: 'OK', onPress: () => dispatch(mainAtions.clearAllPhotos()) }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>{content}</View>
      {photosCount > 0 && (
        <View style={styles.buttonContainer}>
          <Button
            text="Delete All"
            textFirst={false}
            onPress={deleteHandler}
            propStyles={styles.button}
          >
            <MaterialIcons name="delete" style={styles.icon} />
          </Button>
        </View>
      )}
    </View>
  );
}

export default Gallery;
