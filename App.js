import React, { useState } from 'react';
import FullView from './src/Screen/FullView';
import Dashboard from './src/Screen/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fav from './src/Screen/Fav'
import { createStackNavigator } from '@react-navigation/stack';
import { FavContext } from './src/Context/FavContext';
// import Home from './src/Router/Router'
import Splashscreen from './src/Screen/SplashScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const MyTab = () => {

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Favorites" component={Fav} />
    </Tab.Navigator>
  )
}

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={Splashscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={MyTab} />
        <Stack.Screen name="Coin" component={FullView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



const App = () => {
  const [fav, setFav] = useState([])
  // console.log(fav)
  return (
    <FavContext.Provider value={{ fav, setFav }}>
      <MyStack />
    </FavContext.Provider>
  )
}



export default App