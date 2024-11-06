import React, { useContext, useReducer, createContext, useEffect, useState } from "react";
import Features from "../components/Freatures";
import { featured } from "../constants";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";





const GlobalContext = createContext()

export const CartContextProvider = ( { children } ) =>
{
    const [ items, setItems ] = useState( [] )
    const [ quantity, setQuantity ] = useState( 1 )
    const [ filtered, setFiltered ] = useState( [] )

    const storeData = async () =>
    {
        await AsyncStorage.setItem( 'data', JSON.stringify( items ) )
    }


    const getSavedData = async () =>
    {
        let savedItem = await AsyncStorage.getItem( 'data' )
        savedItem = JSON.parse( savedItem )
        if ( savedItem )
        {
            setItems( savedItem )
        }

    }

    useEffect( () => { getSavedData() }, [] )

    return (
        <GlobalContext.Provider value={ { items, setItems, filtered, setFiltered, storeData } }>
            { children }
        </GlobalContext.Provider>
    )

}

export default GlobalContext
