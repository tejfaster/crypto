import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { wp, hp } from '../helper/helper';
import { CrytoCoin } from '../assets/image';

const Screen = () => {
    return (
        <View style={styles.container}>

            <Image source={CrytoCoin} style={styles.logo} />

        </View>
    )
}


const ScreenDark = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.text}>ENTER</Text>
            </TouchableOpacity>

        </View>
    )
}


const Splashscreen = ({ navigation }) => {
    const [isVisible, setVisible] = useState(true)

    useEffect(() => {
        const Timeout = setTimeout(() => {
            setVisible(false)
        }, 2000)

        return () => clearTimeout(Timeout)
    }, [])

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