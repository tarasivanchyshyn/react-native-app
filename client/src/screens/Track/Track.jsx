import React, { useEffect, useState } from 'react';
import { View, Text, Alert, Vibration } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';

import Header from '../../components/UI/Header/Header';
import Button from '../../components/UI/Button/Button';

import styles from './styles';

function Track() {
  const [isTracking, setIsTracking] = useState(false);
  const { time } = useSelector((state) => state);
  const netInfo = useNetInfo();

  const connected = netInfo.isConnected;

  useEffect(() => {
    let timer;
    if (isTracking && !connected && Number(time)) {
      timer = setTimeout(() => {
        Alert.alert('Oops', 'Connection lost. Check your internet.');
        Vibration.vibrate();
      }, time * 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [connected, time, isTracking]);

  return (
    <View style={styles.container}>
      <Header text="Track connection" propStyles={styles.header} />
      {!isTracking ? (
        <Button
          propStyles={styles.startStopBtn}
          propText={{ fontSize: 20 }}
          text="Start"
          textFirst={true}
          onPress={() => setIsTracking(true)}
        >
          <Ionicons name={'globe-outline'} style={styles.icon} />
        </Button>
      ) : (
        <>
          <Text style={styles.message}>Tracking connection...</Text>
          <Text>
            Connected:
            <Text style={styles.info}>
              {netInfo.isConnected ? ' yes' : ' no'}
            </Text>
          </Text>
          {connected && (
            <Text>
              Type: <Text style={styles.info}>{netInfo.type}</Text>
            </Text>
          )}
          <Button
            propStyles={styles.startStopBtn}
            propText={{ fontSize: 20 }}
            text="Stop"
            onPress={() => setIsTracking(false)}
          />
        </>
      )}
    </View>
  );
}

export default Track;
