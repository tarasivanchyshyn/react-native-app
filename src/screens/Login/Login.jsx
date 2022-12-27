import React, { useState } from 'react';
import { View, TextInput, Alert } from 'react-native';

import Button from '../../components/UI/Button/Button';
import Header from '../../components/UI/Header/Header';

import styles from './styles';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetFields = () => {
    setEmail('');
    setPassword('');
  };

  const submitHandler = () => {
    if (!email || !password || !email.trim() || !password.trim()) {
      Alert.alert('Alert', 'Please fill all the fields', [{ text: 'OK' }]);
      resetFields();
      return;
    }
    navigation.navigate('Main');
    resetFields();
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Header text="Login" propStyles={styles.header} />
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          placeholderTextColor="lightgray"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor="lightgray"
          value={password}
          onChangeText={setPassword}
        />
        <Button
          text="Login"
          propStyles={styles.button}
          onPress={submitHandler}
        />
      </View>
    </View>
  );
}

export default Login;
