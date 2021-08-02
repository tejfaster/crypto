import React from 'react';
import FullView from './src/Screen/FullView';
import Dashboard from './src/Screen/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fav from './src/Screen/Fav'
import { createStackNavigator } from '@react-navigation/stack';


import Reducer from './src/State/reducer'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyStack = () => {
  // const [data,setData] = useContext

  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Coin" component={FullView} />
      <Stack.Screen name="Favorites" component={Fav} />
    </Stack.Navigator>
  )
}

const MyTab = () => {
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



const App = () => {
  return (
    
      <MyTab />
   
  )
}



export default App