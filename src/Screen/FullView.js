import React,{useContext} from 'react'
import { StyleSheet, Text, View ,Button } from 'react-native'
import { FavContext } from '../FavContext'

const FullView = (props) => {
    const { id, name, platform, symbol, total_supply, date,item } = props.route.params
    // console.log(Object.values(item).filter(prod => prod !== id))
    const {setFav} = useContext(FavContext)
    const fil = item.data.filter(prod =>prod.id === id)
    const submithandle = () =>{
      setFav(fil)
      props.navigation.navigate('Favorites')
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>id:{id}</Text>
            <Text>Name:{name}</Text>
            <Text>platform:{platform}</Text>
            <Text>Symbol:{symbol}</Text>
            <Text>Total_supply:{total_supply}</Text>
            <Text>Added Date:{date}</Text>
          <Button title='Fav' onPress={()=>submithandle()} />
        </View>
    )
}

export default FullView

const styles = StyleSheet.create({})
