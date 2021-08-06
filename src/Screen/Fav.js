import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { FavContext } from '../Context/FavContext'
import { hp, wp } from '../helper/helper'
import { Coin } from '../assets/image'

const Fav = (props) => {
    const { fav } = useContext(FavContext)

    return (
        <View style={{ flex: 1 }}>
            {
                fav && fav.length > 0 ? <View><FlatList
                    data={fav}
                    keyExtractor={item => item.id}
                    renderItem={(item) =>
                    <ImageBackground source={Coin} resizeMode='cover' style={styles.backgroundimages} blurRadius={30}>
                        <View style={styles.container}>
                            <Text style={styles.text}>{item.item.cmc_rank}</Text>
                            <Text style={styles.text}>{item.item.name}</Text>
                            <Text style={styles.text}>{item.item.symbol}</Text>
                        </View>
                    </ImageBackground>
                    }
                /></View> : <ImageBackground source={Coin} resizeMode='cover' style={styles.backgroundimage} blurRadius={30}>
                    <Text style={{ fontWeight: '700', fontSize: hp('4%') }}>...No Favorite </Text>
                </ImageBackground>
            }
        </View>
    )
}

export default Fav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('5%'),
        height: hp('5%'),
        marginVertical: hp('0.5%'),
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: wp('10%'),
        alignItems: 'center',
        paddingHorizontal: wp('2%')
    },
    text: {
        fontSize: hp('3%'),
        color:'white'
    },
    backgroundimage: {
        width: wp('100%'),
        height: hp('100%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundimages: {
        width: wp('100%'),
        height: hp('100%'),
    },
})
