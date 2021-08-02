import React,{useSate} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Fav = (props) => {
    const { id, name } = props.route.params
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>id:{id}</Text>
        <Text>Name:{name}</Text>
    </View>
    )
}

export default Fav

const styles = StyleSheet.create({})
