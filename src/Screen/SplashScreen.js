import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { wp, hp } from '../helper/helper';
import { CrytoCoin } from '../assets/image';
import { FavContext } from '../Context/FavContext'

const Screen = () => {
    return (
        <View style={styles.container}>
            <Image source={CrytoCoin} style={styles.logo} />
        </View>
    )
}


const Splashscreen = ({ navigation }) => {
    const [isVisible, setVisible] = useState(true)
    const { cryptodata, setCryptodata,setValue,getItem } = useContext(FavContext)

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

    const readItemFromStorage = async () => {
        try{
            const jsonValue = await getItem()
            const item = jsonValue != null ? JSON.parse(jsonValue) : null;
            setValue(item);
        }catch(err){
            console.log(err)
        }
      };

    useEffect(() => {
        Api()
        readItemFromStorage()
        const Timeout = setTimeout(() => {
            setVisible(false)
        }, 2000)

        return () => clearTimeout(Timeout)       
    }, [])

  

    const submithandle = () => {
        Api()
        readItemFromStorage()
        navigation.navigate('Dashboard')
    }

    const ScreenDark = () => {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.button} onPress={submithandle}>
                    <Text style={styles.text}>ENTER</Text>
                </TouchableOpacity>

            </View>
        )
    }
    return (
        <View style={styles.MainContainer}>
            {
                isVisible ? <Screen /> : <ScreenDark navigation={navigation} />
            }
        </View>
    );
}
const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
        },
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'black'
        },
        subcontainer: {
            borderWidth: 1,
            borderColor: "blue",
            width: wp('90%'),
            height: hp('42%'),
            borderRadius: 180,
            justifyContent: 'center'
        },
        logo: {
            width: wp('100%'),
            height: hp('100%'),
            alignSelf: 'center'
        },
        button: {
            width: wp('60%'),
            backgroundColor: 'white',
            height: hp('10%'),
            borderRadius: wp('40%'),
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontSize: hp('6%'),
            fontWeight: '700'
        }
    });


export default Splashscreen