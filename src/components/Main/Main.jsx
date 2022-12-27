import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Track from '../../screens/Track/Track';
import Configuration from '../../screens/Configurate/Configuration';
import Button from '../UI/Button/Button';
import { colorMain } from '../../constants/styles';

const Tab = createBottomTabNavigator();

function Main({ navigation }) {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color }) => {
      let iconName;
      if (route.name === 'Track') {
        iconName = focused
          ? 'ios-information-circle'
          : 'ios-information-circle-outline';
      }
      if (route.name === 'Configuration') {
        iconName = focused ? 'settings' : 'settings-outline';
      }
      return <Ionicons name={iconName} size={27} color={color} />;
    },
    tabBarActiveTintColor: colorMain,
    tabBarLabelStyle: { fontSize: 15 },
    headerRight: () => (
      <Button
        text="Logout"
        propStyles={{ marginRight: 15, backgroundColor: 'lightgray' }}
        onPress={() => navigation.navigate('Login')}
      />
    )
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Track" component={Track} />
      <Tab.Screen name="Configuration" component={Configuration} />
    </Tab.Navigator>
  );
}

export default Main;
