import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'


const Dashboard = ({navigation}) => {
   
    const [cryptodata, setCryptodata] = useState([])
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

    // console.log(cryptodata)

    const handlesubmit = (item) => {
       
        navigation.navigate('Coin',{
            id:item.id,
            name:item.name,
            platform:item.platform,
            symbol:item.symbol,
            total_supply:item.total_supply,
            date:item.date_added,
            item:cryptodata
        })
        
    }

    return (
        <ScrollView>
            {
                cryptodata && cryptodata.data && cryptodata.data.length > 0 &&
                cryptodata.data.map((item) => {
                    {/* console.log(item)  */ }
                    return (

                        <View key={item.id} >
                            <TouchableOpacity style={styles.container} onPress={() => handlesubmit(item)}>
                                <Text style={{ fontSize: 20 }} >{item.name}</Text>
                                <Text style={{ fontSize: 20 }} > {item.symbol}</Text>
                            </TouchableOpacity>
                        </View>

                    )
                })
            }
        </ScrollView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
        // height:20,
        // width:60
    }
})
