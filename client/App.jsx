import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import Main from './src/components/Main/Main';
import Register from './src/screens/Auth/Register';
import Login from './src/screens/Auth/Login';
import Photo from './src/screens/Photo/Photo';
import store from './src/store/store';

const Stack = createNativeStackNavigator();

import { persistor } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen
              name="Photo"
              component={Photo}
              options={{
                headerShown: true
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
