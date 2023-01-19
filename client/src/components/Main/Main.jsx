import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';

import Track from '../../screens/Track/Track';
import Configuration from '../../screens/Configurate/Configuration';
import PhotoCamera from '../../screens/PhotoCamera/PhotoCamera';
import Gallery from '../../screens/Gallery/Gallery';
import Pay from '../../screens/Pay/Pay';
import Button from '../UI/Button/Button';
import { colorMain } from '../../constants/styles';

import styles from './styles';

const Tab = createBottomTabNavigator();

function Main({ navigation }) {
  const headerLogoutButton = (
    <Button
      text="Logout"
      propStyles={styles.button}
      textFirst={false}
      onPress={() => navigation.navigate('Login')}
    >
      <SimpleLineIcons name="logout" style={styles.icon} />
    </Button>
  );

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color }) => {
      let iconName;
      switch (route.name) {
        case 'Track':
          iconName = focused ? 'globe' : 'globe-outline';
          break;
        case 'Settings':
          iconName = focused ? 'settings' : 'settings-outline';
          break;
        case 'PhotoCamera':
          iconName = focused ? 'camera' : 'camera-outline';
          break;
        case 'Gallery':
          iconName = focused ? 'image' : 'image-outline';
          break;
        case 'Pay':
          iconName = focused ? 'card' : 'card-outline';
      }
      return <Ionicons name={iconName} size={30} color={color} />;
    },

    tabBarActiveTintColor: colorMain,
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: { height: 60 },
    tabBarShowLabel: false,
    tabBarIconStyle: { marginBottom: 10 },
    headerRight: () => headerLogoutButton
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Track" component={Track} />
      <Tab.Screen name="Settings" component={Configuration} />
      <Tab.Screen
        name="PhotoCamera"
        component={PhotoCamera}
        options={{ unmountOnBlur: true, title: 'Camera' }}
      />
      <Tab.Screen name="Gallery" component={Gallery} />
      <Tab.Screen name="Pay" component={Pay} />
    </Tab.Navigator>
  );
}

export default Main;
