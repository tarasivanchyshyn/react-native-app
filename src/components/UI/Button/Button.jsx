import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

function Button(props) {
  const { text, onPress, propStyles, propText, disabled } = props;

  return (
    <TouchableOpacity
      title={text}
      onPress={onPress}
      style={[styles.button, propStyles]}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, propText]}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
