import React, { useEffect, useState,useContext } from 'react'
import { FavContext } from '../Context/FavContext'

export default Network = () =>{
    const { setCryptodata } = useContext(FavContext)
    
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

}