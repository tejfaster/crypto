import React, { useState } from 'react';
import { FavContext } from './src/Context/FavContext';
import Home from './src/Router/Router'


const App = () => {
  const [fav, setFav] = useState([])
  const [cryptodata, setCryptodata] = useState([])
  // console.log('favapp',fav)
  return (
    <FavContext.Provider value={{ fav, setFav,cryptodata,setCryptodata }}>
      <Home />
    </FavContext.Provider>
  )
}



export default App