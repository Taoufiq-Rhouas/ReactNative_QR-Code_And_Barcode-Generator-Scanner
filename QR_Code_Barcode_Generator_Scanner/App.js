import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import QR_Code from './screens/QR_Code';
import Bar_Code from './screens/Bar_Code';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'React Native QR Code & Bar Code' }}/>
        <Stack.Screen name="QR Code" component={QR_Code} options={{ title: 'React Native App QR Code' }}/>
        <Stack.Screen name="Bar Code" component={Bar_Code} options={{ title: 'React Native App Bar Code' }}/>   
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;