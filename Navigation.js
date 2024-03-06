import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import { ListaTarefas } from './App'; 

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ListaTarefas" component={ListaTarefas} />
    </Stack.Navigator>
  );
};

export default Navigation;
