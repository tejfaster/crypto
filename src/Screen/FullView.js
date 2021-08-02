import React from 'react'
import { StyleSheet, Text, View ,Button } from 'react-native'


const FullView = (props) => {
    const { id, name, platform, symbol, total_supply, date,item } = props.route.params
    // console.log(Object.values(item).filter(prod => prod !== id))
    const data = Object.values(item).filter(prod => prod !== id)
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>id:{id}</Text>
            <Text>Name:{name}</Text>
            <Text>platform:{platform}</Text>
            <Text>Symbol:{symbol}</Text>
            <Text>Total_supply:{total_supply}</Text>
            <Text>Added Date:{date}</Text>
          <Button title='Fav' onPress={()=>props.navigation.navigate('Favorites',{
               id:id,
            name:name,
            platform:platform,
            symbol:symbol,
            total_supply:total_supply,
            date:date,
            item:data
          })} />
        </View>
    )
}

export default FullView

const styles = StyleSheet.create({})
