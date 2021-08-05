import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground, Animated } from 'react-native'
import { wp, hp } from '../helper/helper'
import { CrytoCoin } from '../assets/image'
import { FavContext } from '../Context/FavContext'


const Dashboard = ({ navigation }) => {

    const { cryptodata,setCryptodata } = useContext(FavContext)
    // const [cryptodata,setCryptodata] = useState([])

    const Api = async () => {
        let result = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
            headers: {
                'X-CMC_PRO_API_KEY': "2592e201-7cb0-41b4-81d5-abacc60ac4ee"
            }
        })

        let data = await result.json()
        let res = await data
        if (res && res?.data) {
            setCryptodata(res)
        }
    }

    useEffect(() => {
        Api()
    }, [])


    const handlesubmit = (item) => {

        // console.log(item.item.name)
        navigation.navigate('Coin', {
            // cmc_rank: item.item.cmc_rank,
            id: item.item.id,
            // name: item.item.name,
            // platform: item.item.platform,
            // symbol: item.item.symbol,
            // total_supply: item.item.total_supply,
            // date_added: item.item.date_added,
            // item: cryptodata,
            // last_updated: item.item.last_updated
        })

    }

    // console.log(cryptodata.data[0])

    return (
        <View>
            <ImageBackground source={CrytoCoin} resizeMode='cover' style={styles.backgroundimage} blurRadius={5}>
                {
                    cryptodata &&
                    cryptodata.data &&
                    cryptodata.data.length > 0 &&
                    <FlatList
                        data={cryptodata.data}
                        keyExtractor={item => item.cmc_rank}
                        renderItem={(item) => {
                            return (
                                <TouchableOpacity style={styles.subcontainer} onPress={() => handlesubmit(item)}>
                                    <Text
                                        style={styles.rank}>{item.item.cmc_rank}.
                                        <Text
                                            style={styles.symbol}>   {item.item.symbol}
                                        </Text>
                                    </Text>
                                    <Text style={styles.name} >
                                        {item.item.name}
                                    </Text>
                                </TouchableOpacity>)
                        }}
                    />
                }
            </ImageBackground>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundimage: {
        width: wp('100%'),
        height: hp('100%'),
        justifyContent: 'flex-start',

    },
    subcontainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: wp('3%'),
        height: hp('7%'),
        width: wp('90%'),
        alignSelf: 'center',
        marginVertical: hp('0.5%'),
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: wp('10%')
    },
    rank: {
        fontSize: hp('4%'),
        fontWeight: '700',
        color: '#ffffff'
    },
    symbol: {
        fontSize: hp('3%'),
        fontWeight: '100',
        color: '#ffffff'
    },
    name: {
        fontSize: hp('2.54%'),
        fontWeight: '700',
        color: '#ffffff'
    }

})

// <ScrollView>
        //     {
        //         cryptodata && cryptodata.data && cryptodata.data.length > 0 &&
        //         cryptodata.data.map((item) => {
        //             {/* console.log(item)  */ }
        //             return (

        //                 <View key={item.id} >
        //                     <TouchableOpacity style={styles.container} onPress={() => handlesubmit(item)}>
        //                         <Text style={{ fontSize: 20 }} >{item.name}</Text>
        //                         <Text style={{ fontSize: 20 }} > {item.symbol}</Text>
        //                     </TouchableOpacity>
        //                 </View>

        //             )
        //         })
        //     }
        // </ScrollView>