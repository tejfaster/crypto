import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import { FavContext } from '../Context/FavContext'
import { wp, hp } from '../helper/helper'
import { Coin, CenterCoin } from '../assets/image'


const FullView = (props) => {
  const { id } = props.route.params
  const { fav, setFav, cryptodata, mergeItem, removeItem, value, setItem } = useContext(FavContext)

  const fil = cryptodata.data.filter(prod => prod.id === id)
  // console.log('fil', cryptodata.data)
  const submithandle = async (item) => {
    const data = item.item

    if (fav.length > 0) {

      const fil = fav.filter(prod => prod.id === data.id)
      console.log(fil)
      if (fil.length > 0) {
        // try{
        //   const removevalue = value.filter(prod => prod.id === data.id )
        //   await removeItem(removevalue.id)
        // }catch(err){
        //   console.log('err5',err)
        // }
        setFav(fav.filter(prod => prod.id !== data.id))
      } else {
        // if (value.length > 0) {
        //   try {
        //     const jsonValue = JSON.stringify(fav)
        //     await mergeItem(jsonValue)
        //   } catch (err) {
        //     console.log('err1',err)
        //   }
        // } else {
        //   try {
        //     const jsonValue = JSON.stringify(fav)
        //     await setItem(jsonValue);
        //     setValue(fav);
        //   } catch (err) {
        //     console.log('err2',err)
        //   }
        // }
        setFav(items => [...items, data])
      }
    } 
    else {
      console.log('fil', fil)
      // if (value.length > 0) {
      //   try {
      //     const jsonValue = JSON.stringify(fav)
      //     await mergeItem(jsonValue)
      //   } catch (err) {
      //     console.log('err3',err)
      //   }
      // } else {
      //   try {
      //     const jsonValue = JSON.stringify(fav)
      //     await setItem(jsonValue);
      //     setValue(fav);
      //   } catch (err) {
      //     console.log('err4',err)
      //   }
      // }
      setFav(items => [...items, data])
    }
  }

  // console.log('fav', fil)

  return (
    <View>
      {
        fil && <FlatList
          data={fil}
          keyExtractor={item => item.id}
          renderItem={(item) => {
            return (
              <View >
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
                    {/* {
                      item.item.platform ? <Text
                        style={styles.moredata}> Platform: {item.item.platform}
                      </Text> : <Text style={styles.moredata}>Platform: Nan</Text>
                    } */}
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
