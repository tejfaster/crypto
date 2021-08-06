import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import { FavContext } from '../Context/FavContext'
import { wp, hp } from '../helper/helper'
import { Coin, CenterCoin } from '../assets/image'


const FullView = (props) => {
  const { id } = props.route.params
  const { fav, setFav, cryptodata } = useContext(FavContext)

  const fil = cryptodata.data.filter(prod => prod.id === id)
  const submithandle = (item) => {
    const data = item.item
    if (fav.length > 0) {
      // console.log('fav', fav) 
      const fil = fav.filter(prod => prod.id === data.id)
      console.log('fil',fil)
    
      if (fil.length > 0) {
        setFav(fav.filter(prod => prod.id !== data.id))
      } else {
        setFav(items => [...items, data])
      }
    } else {
      setFav(items => [...items, data])
    }
  }

  // console.log('fav', fav)

  return (
    <View>
      {
        fil && fil.length > 0 && <FlatList
          data={fil}
          keyExtractor={item => item.id}
          renderItem={(item) => {
            // console.log(item)
            return (
              <View key={item.item.cmc_rank}>
                <ImageBackground source={Coin} resizeMode='cover' style={styles.backgroundimage} blurRadius={30}>
                  <View style={styles.headers}>
                    <Text
                      style={styles.rank}> RANK: {item.item.cmc_rank}
                    </Text>
                    <Text
                      style={styles.symbol}>SYM:   {item.item.symbol}
                    </Text>
                  </View>
                  <ImageBackground source={CenterCoin} resizeMode='cover' style={styles.centerimage} blurRadius={100} imageStyle={{ borderRadius: 100 }}>
                    <Text style={styles.name} >{item.item.name}
                    </Text>
                  </ImageBackground>
                  <Text
                    style={[styles.moredata, { alignSelf: 'center' }]}>Add Date: {item.item.date_added}
                  </Text>
                  <Text
                    style={[styles.moredata, { alignSelf: 'center' }]}>Last Date: {item.item.last_updated}
                  </Text>
                  <View style={styles.headers}>
                    {
                      item.item.platform ? <Text
                        style={styles.moredata}> Platform: {item.item.platform}
                      </Text> : <Text style={styles.moredata}>Platform: Nan</Text>
                    }
                    <Text
                      style={styles.moredata}>Total Supply:   {item.item.total_supply}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.fav} onPress={() => submithandle(item)}>
                    <Text style={[styles.moredata, { fontWeight: '700', fontSize: hp('3%') }]}>FAVORITES</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            )
          }}
        />
      }

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
