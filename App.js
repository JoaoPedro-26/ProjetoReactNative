import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Infos from './src/pages/Infos';
import Lancamento from './src/pages/Lancamento';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Infos" component={Infos}/>
        <Stack.Screen name="Lancamento" component={Lancamento}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
