import React, { useState } from 'react';
import { FavContext } from './src/Context/FavContext';
import Home from './src/Router/Router'
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const App = () => {
  const [fav, setFav] = useState([])
  const [value,setValue] = useState('')
  const [cryptodata, setCryptodata] = useState([])
  const { getItem, setItem,mergeItem,removeItem } = useAsyncStorage('@storage_key');
  // console.log('djkscbv',value)
  // console.log('favapp',fav)
  return (
    <FavContext.Provider value={{ fav, setFav,cryptodata,setCryptodata,getItem,setItem,value,setValue,mergeItem,removeItem }}>
      <Home />
    </FavContext.Provider>
  )
}



export default App