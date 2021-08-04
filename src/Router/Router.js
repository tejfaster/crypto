import React from 'react';
import FullView from '../Screen/FullView';
import Dashboard from '../Screen/Dashboard';
import Fav from '../Screen/Fav'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyStack = () => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Coin" component={FullView} />
      <Stack.Screen name="Favorites" component={Fav} />
    </Stack.Navigator>
  )
}

export default Home = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false
        }}
        >
          <Tab.Screen name="Home" component={MyStack} />
          <Tab.Screen name="Favorites" component={Fav} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
  