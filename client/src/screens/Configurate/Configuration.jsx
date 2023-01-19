import React, { useState } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';

import Header from '../../components/UI/Header/Header';
import Button from '../../components/UI/Button/Button';
import { mainAtions } from '../../store/mainSlice';
import { colorBtnMain } from '../../constants/styles';

import styles from './styles';

function Configuration() {
  const [text, setText] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();

  const onChangeText = (text) => {
    setIsDisabled(false);
    setText(text.replace(/[^0-9]/g, ''));
  };

  const setTime = () => {
    setIsDisabled(true);
    Keyboard.dismiss();

    dispatch(mainAtions.setTime(text));
  };

  return (
    <View style={styles.container}>
      <Header text="Settings" propStyles={styles.header} />
      <Text style={styles.configuration}>
        Enter amount of time (in seconds) after which notification of
        unsuccessful connection attempts will be recieved
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={text}
        onChangeText={onChangeText}
      />
      <Text style={styles.message}>Enter only numbers</Text>
      <Button
        text="OK"
        propStyles={{
          marginTop: 20,
          backgroundColor: `${isDisabled ? 'gray' : colorBtnMain}`
        }}
        onPress={setTime}
        disabled={isDisabled}
      />
    </View>
  );
}

export default Configuration;
