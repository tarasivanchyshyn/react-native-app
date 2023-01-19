import { useState, useRef, useEffect } from 'react';
import { Text, TouchableOpacity, View, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { Camera, CameraType } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';

import { mainAtions } from '../../store/mainSlice';
import styles from './styles';

function PhotoCamera() {
  const [type, setType] = useState(CameraType.back);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [photo, setPhoto] = useState();
  const cameraRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === 'granted');
    })();
  }, []);

  useEffect(() => {
    if (photo) {
      dispatch(mainAtions.addPhoto('data:image/jpg;base64,' + photo.base64));
    }
    setPhoto(undefined);
  }, [photo]);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting Permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permissions for camera not granted. Please change this in settings.
      </Text>
    );
  }

  const takePic = async () => {
    const options = {
      quality: 0.5,
      base64: true,
      exif: true
    };

    const newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  function toggleCamera() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef} ratio="16:9">
        <View style={styles.buttonContainer}>
          <Pressable style={styles.shootPhoto} onPress={takePic} />
          <TouchableOpacity style={styles.toggleCamera} onPress={toggleCamera}>
            <Ionicons name={'camera-reverse'} size={50} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

export default PhotoCamera;
