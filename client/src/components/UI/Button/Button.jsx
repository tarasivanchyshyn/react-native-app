import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

function Button(props) {
  const {
    text,
    onPress,
    propStyles,
    propText,
    disabled,
    children,
    textFirst = true
  } = props;

  return (
    <TouchableOpacity
      title={text}
      onPress={onPress}
      style={[styles.button, propStyles]}
      disabled={disabled}
    >
      {textFirst ? (
        <>
          <Text style={[styles.buttonText, propText]}>{text}</Text>
          {children}
        </>
      ) : (
        <>
          {children}
          <Text style={[styles.buttonText, propText]}>{text}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}

export default Button;
