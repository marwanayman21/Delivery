import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import GlobalContext from '../context/ShoppingContext';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../constants/styles';
const DishCard = ( { dish } ) =>
{

    const { items, setItems, storeData } = useContext( GlobalContext )
    const stored = items.find( e => e.id == dish.id ) ? true : false

    useEffect( () => { storeData() }, [ items ] )
    // const storeData = async () =>
    // {
    //     await AsyncStorage.setItem( 'data', JSON.stringify( items ) )
    // }
    // useEffect( () => { getSavedData() }, [] )
    // const getSavedData = async () =>
    // {
    //     let savedItem = await AsyncStorage.getItem( 'data' )
    //     savedItem = JSON.parse( savedItem )
    //     if ( savedItem )
    //     {
    //         setItems( savedItem )
    //     }

    // }


    return (

        <View style={ styles.container }>
            <View style={ styles.imgContainer }>
                <Image source={ dish.image } style={ styles.img }></Image>
            </View>
            <View style={ styles.details }>
                <Text style={ { fontWeight: 'bold' } }>{ dish.name }</Text>
                <Text style={ { color: 'gray', fontSize: 10 } }>{ dish.description }</Text>
                <Text style={ { fontWeight: 'bold', color: 'green' } }>${ dish.price }</Text>
            </View>
            <View style={ styles.buy }>
                <TouchableOpacity style={ stored ? styles.btn : styles.storedbtn }
                    onPress={ () =>
                    {
                        stored ? setItems( items.filter( ( e ) => e.id !== dish.id ) ) : setItems( [ ...items, dish ] )

                    } }
                >
                    { stored ? <Entypo name="shopping-cart" size={ 30 } color="white" /> : <Entypo name="shopping-cart" size={ 30 } color={ COLORS.main } /> }
                </TouchableOpacity>
                {/* <Text>{ count }</Text>
                <TouchableOpacity style={ styles.btn }
                    onPress={ () => { setCount( count - 1 ), count == 1 ? setItems( items.filter( ( e ) => e.id !== dish.id ) ) : null } }
                >
                    <Text style={ { color: 'white' } }>-</Text>
                </TouchableOpacity> */}
            </View>

        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 9,
        flexDirection: 'row',
        width: '95%',
        height: 130,
        margin: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: COLORS.main,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
        marginHorizontal: 3,
        alignSelf: 'center'
    },
    imgContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    details: {
        flex: 4,
        justifyContent: 'space-around',
        paddingVertical: 10

    },
    buy: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    img: {
        width: '80%',
        height: '80%',
        borderRadius: 20
    },
    btn:
    {
        backgroundColor: COLORS.main,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    storedbtn:
    {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.main,
        borderWidth: 2,
    }

} )

export default DishCard;
