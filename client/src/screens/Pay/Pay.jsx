import { View, Platform, Text } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

import Header from '../../components/UI/Header/Header';
import Button from '../../components/UI/Button/Button';

import styles from './styles';

function Pay() {
  const googlePayIcon = (
    <>
      <Fontisto name="google" style={styles.googleIcon} />
      <Text style={styles.googleIconText}>Pay</Text>
    </>
  );
  const applePayIcon = <Fontisto name="apple-pay" style={styles.appleIcon} />;

  let platformPaymentIcon =
    Platform.OS === 'ios' ? applePayIcon : googlePayIcon;

  // platformPaymentIcon = (
  //   <Fontisto
  //     name="apple-pay"
  //     size={30}
  //     color="white"
  //     style={{ marginLeft: 10 }}
  //   />
  // );

  return (
    <View style={styles.container}>
      <Header text="Make a payment" propStyles={styles.header} />
      <Button text="Pay with" textFirst={true}>
        {platformPaymentIcon}
      </Button>
    </View>
  );
}

export default Pay;
