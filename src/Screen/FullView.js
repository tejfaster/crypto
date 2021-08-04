import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import { FavContext } from '../Context/FavContext'
import { wp, hp } from '../helper/helper'
import { Coin, CenterCoin } from '../assets/image'

const FullView = (props) => {
  const { id, name, platform, symbol, total_supply, date_added, item, cmc_rank, last_updated } = props.route.params
  const { setFav } = useContext(FavContext)
  const fil = item.data.filter(prod => prod.id === id)
  const submithandle = () => {

    setFav(fil)
    props.navigation.navigate('Favorites')
  }
  return (

    <View>
      <ImageBackground source={Coin} resizeMode='cover' style={styles.backgroundimage} blurRadius={30}>
        <View style={styles.headers}>
          <Text
            style={styles.rank}> RANK: {cmc_rank}
          </Text>
          <Text
            style={styles.symbol}>SYM:   {symbol}
          </Text>
        </View>
        <ImageBackground source={CenterCoin} resizeMode='cover' style={styles.centerimage} blurRadius={100} imageStyle={{ borderRadius: 100 }}>
          <Text style={styles.name} >{name}
          </Text>
        </ImageBackground>
        <Text
          style={[styles.moredata, { alignSelf: 'center' }]}>Add Date: {date_added}
        </Text>
        <Text
          style={[styles.moredata, { alignSelf: 'center' }]}>Last Date: {last_updated}
        </Text>
        <View style={styles.headers}>
          {
            platform ? <Text
              style={styles.moredata}> Platform: {platform}
            </Text> : <Text style={styles.moredata}>Platform: Nan</Text>
          }
          <Text
            style={styles.moredata}>Total Supply:   {total_supply}
          </Text>
        </View>
        <TouchableOpacity style={styles.fav}>
          <Text style={[styles.moredata, { fontWeight: '700', fontSize: hp('3%') }]}>FAVORITES</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default FullView

const styles = StyleSheet.create({
  headers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('8%')
  },
  backgroundimage: {
    width: wp('100%'),
    height: hp('100%'),
    justifyContent: 'flex-start',
    // alignItems: 'center'
  },
  rank: {
    fontSize: hp('4%'),
    fontWeight: '700',
    color: '#ffffff'
  },
  symbol: {
    fontSize: hp('3%'),
    fontWeight: '700',
    marginTop: hp('0.7%'),
    color: '#ffffff'
  },
  name: {
    fontSize: hp('4%'),
    fontWeight: '700',
    color: '#ffffff'
  },
  centerimage: {
    width: wp('50%'),
    height: hp('23.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp('20%'),
    marginBottom: hp('5%'),
  },
  moredata: {
    fontSize: hp('2%'),
    fontWeight: '100',
    color: '#ffffff'
  },
  fav: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: hp('4%'),
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: wp('50%'),
    height: hp('5%'),
    borderRadius: wp('20%')
  }
})
