import React,{useContext}  from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FavContext } from '../Context/FavContext'

const Fav = (props) => { 
    const { fav } = useContext(FavContext)
    // // console.log('fav',fav)
    // const data  =  Object.assign({},fav)
    // console.log('databsjhk',data.name)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
                fav && fav.length > 0 ? <View>
                   {
                       fav.map((item) =>{
                      console.log(item)
                           return(
                               <View key={item.name}>
                            <Text>{item.name}</Text>
                            <Text>{item.symbol}</Text>
                               </View>
                           )
                       })
                   }
                </View> : <Text>...No Data</Text>
            }

        </View>
    )
}

export default Fav

const styles = StyleSheet.create({})
