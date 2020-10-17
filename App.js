import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from './src/redux/store';
import HomeScreen from './src/HomeScreen';
import FullScreenImage from './src/FullScreenImage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome to gallery'}}
          />
          <Stack.Screen name="FullScreenImage" component={FullScreenImage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
