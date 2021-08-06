import React, { useContext, useEffect } from 'react'
import { FlatList, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FavContext } from '../Context/FavContext'
import { hp, wp } from '../helper/helper'
import { Coin, CrytoCoin } from '../assets/image'

const Fav = (props) => {
    const { fav, setValue, setItem, value } = useContext(FavContext)

    const writeItemToStorage = async () => {
        try {
            const jsonValue = JSON.stringify(fav)
            await setItem(jsonValue);
            setValue(fav);
        } catch (err) {
            console.log(err)
        }
    };
    // console.log('val', value)
    return (
        <View style={{ flex: 1 }}>
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
                /><TouchableOpacity style={styles.savebutton} onPress={writeItemToStorage}>
                        <Text style={styles.text}>Save</Text>
                    </TouchableOpacity>
                </View>
                    :
                    value && value.length > 0 ? <View><FlatList
                        data={value}
                        keyExtractor={item => item.id}
                        renderItem={(item) =>
                        // console.log(item.item.id)
                            <View style={styles.container}>
                                <Text style={styles.text}>{item.item.cmc_rank}.</Text>
                                <Text style={styles.text}>{item.item.name}</Text>
                                <Text style={styles.text}>{item.item.symbol}</Text>
                            </View>

                        }
                    /></View> :
                        <ImageBackground source={Coin} resizeMode='cover' style={styles.backgroundimage} blurRadius={30}>
                            <Text style={{ fontSize: hp('4%'), fontWeight: '700' }}>...No Data</Text>
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
        color: 'white'
    },
    backgroundimage: {
        width: wp('100%'),
        height: hp('100%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    savebutton: {
        width: wp('20%'),
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: hp('80%'),
        alignSelf: 'center',
        borderRadius: 30
    }
})
