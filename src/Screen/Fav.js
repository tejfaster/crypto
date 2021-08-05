import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { FavContext } from '../Context/FavContext'
import { hp, wp } from '../helper/helper'

const Fav = (props) => {
    const { fav } = useContext(FavContext)
  

    return (
        <View style={{ flex:1 }}>
            {
                fav && fav.length > 0 ? <View><FlatList
                    data={fav}
                    keyExtractor={item => item.id}
                    renderItem={(item) =>
                        <View style={styles.container}>
                            <Text style={styles.text}>{item.item.cmc_rank}.</Text>
                            <Text style={styles.text}>{item.item.name}</Text>
                            <Text style={styles.text}>{item.item.symbol}</Text>
                        </View>
                    }
                /></View> : <Text>...No Data</Text>
            } 
        </View>
    )
}

export default Fav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',    
        marginHorizontal:wp('5%'),
        height:hp('5%'),
        marginVertical: hp('0.5%'),
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: wp('10%'),
        alignItems:'center',
        paddingHorizontal:wp('2%')
    },
    text:{
        fontSize:hp('3%')
    }
})
