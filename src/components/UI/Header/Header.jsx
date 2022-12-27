import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

function Header({ text, propStyles }) {
  return <Text style={[styles.header, propStyles]}>{text}</Text>;
}

export default Header;
