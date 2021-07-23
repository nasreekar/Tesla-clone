import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BrowserScreen from './screens/BrowserScreen';

const Stack = createStackNavigator();

export const AppStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Browser" component={BrowserScreen} />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default App;