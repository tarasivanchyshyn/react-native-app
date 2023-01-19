import { useState } from 'react';
import { View, Alert, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

import Header from '../../components/UI/Header/Header';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { registerUser } from '../../api/services/authService';
import {
  facebookAppID,
  googleClientID,
  googleIosID,
  googleAndroidID,
  alertFillAllFields,
  alertPasswordLength,
  alertPasswordsMatch
} from '../../constants/constants';

import styles from './styles';

WebBrowser.maybeCompleteAuthSession();

function Register({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [_, __, googlePromptAsync] = Google.useAuthRequest({
    clientId: googleClientID,
    iosClientId: googleIosID,
    androidClientId: googleAndroidID
  });

  const logInGoogle = async () => {
    try {
      const response = await googlePromptAsync();
      if (response?.type === 'success') {
        const token = response.params.access_token;
        const res = await fetch('https://www.googleapis.com/userinfo/v2/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const { name } = await res.json();
        Alert.alert('Logged in!', `Welcome, ${name}!`);
        navigation.navigate('Main');
      } else if (response?.type === 'cancel') {
        Alert.alert('Login Error');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [___, ____, facebookPromptAsync] = Facebook.useAuthRequest({
    clientId: facebookAppID,
    expoClientId: facebookAppID
  });

  const logInFacebook = async () => {
    try {
      const response = await facebookPromptAsync();
      if (response.type === 'success') {
        const token = response.params.access_token;
        const res = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        const { name } = await res.json();

        Alert.alert('Logged in!', `Welcome, ${name}!`);
        navigation.navigate('Main');
      } else {
        Alert.alert('Login Error');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const resetFields = () => {
    setName('');
    setEmail('');
    setPassword('');
    setPassword2('');
  };

  const register = async () => {
    if (!name || !email || !password || !password2) {
      alert(alertFillAllFields);
      return;
    }
    if (password.length < 4) {
      alert(alertPasswordLength);
      return;
    }
    if (password !== password2) {
      alert(alertPasswordsMatch);
      return;
    }
    try {
      const res = await registerUser({
        name: name.trim(),
        email: email.trim(),
        password: password.trim()
      });
      if (res.status === 400) {
        const { message } = await res.json();
        Alert.alert('Error!', `${message}`);
        return;
      }
      Alert.alert('Logged in!', `Welcome, ${name}!`);
      navigation.navigate('Main');
      resetFields();
    } catch (err) {
      console.log(err);
      return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.headerContainer}>
          <Header text="Sign up" propStyles={styles.header} />
          <MaterialCommunityIcons name="login" style={styles.icon} />
        </View>
        <Input
          placeholder="Enter name"
          maxLength={20}
          value={name}
          onChangeText={(text) => setName(text.trim())}
        />
        <Input
          placeholder="Enter email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
        />
        <Input
          placeholder="Enter password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
        />
        <Input
          placeholder="Confirm password"
          secureTextEntry={true}
          value={password2}
          onChangeText={(text) => setPassword2(text.trim())}
        />
        <View style={styles.actions}>
          <Button text="Sign up" propStyles={styles.button} onPress={register}>
            <MaterialCommunityIcons
              name="login"
              style={styles.iconLoginSmall}
            />
          </Button>
          <View style={styles.loginOption}>
            <Text style={styles.loginOptionHeader}>Already registered?</Text>
            <Text
              style={styles.loginOptionLink}
              onPress={() => navigation.navigate('Login')}
            >
              Log in
            </Text>
          </View>
          <Text style={styles.or}>or</Text>
          <Button
            text="Login with Facebook"
            propStyles={styles.buttonFacebook}
            onPress={logInFacebook}
          >
            <FontAwesome name="facebook-square" style={styles.iconFacebook} />
          </Button>
          <Button
            text="Login with Google"
            propStyles={styles.buttonGoogle}
            onPress={logInGoogle}
          >
            <FontAwesome name="google" style={styles.iconGoogle} />
          </Button>
        </View>
      </View>
    </View>
  );
}

export default Register;
