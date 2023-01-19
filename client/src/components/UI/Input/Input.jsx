import { TextInput } from 'react-native';
import styles from './styles';

const Input = (props) => {
  const {
    keyboardType,
    placeholder,
    maxLength,
    secureTextEntry,
    value,
    onChangeText
  } = props;

  return (
    <TextInput
      style={styles.input}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor="lightgray"
      maxLength={maxLength}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
