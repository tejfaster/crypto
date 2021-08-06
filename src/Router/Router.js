import React from 'react';
import FullView from '../Screen/FullView';
import Dashboard from '../Screen/Dashboard';
import Fav from '../Screen/Fav'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Splashscreen from '../Screen/SplashScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyTab = () => {

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Favorites" component={Fav}  />
    </Tab.Navigator>
  )
}

export default Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={Splashscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={MyTab} option={{headerLeft:false}} options={{
          headerTitle:"Home",
          headerLeft:()=>{
          return null
        }}} />
        <Stack.Screen name="Favorites" component={Fav} />
        <Stack.Screen name="Coin" component={FullView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
