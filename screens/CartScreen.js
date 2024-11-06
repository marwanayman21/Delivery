//import liraries
import React, { Component, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { featured } from '../constants';
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CartCard from '../components/CartCard';
import GlobalContext from '../context/ShoppingContext';
import { Button } from 'react-native';
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../constants/styles';

// create a component
const CartScreen = () =>
{
    const saveInput = async () =>
    {
        await AsyncStorage.setItem( 'text', JSON.stringify( input ) )
    }
    useEffect( () => { getSavedInput() }, [] )
    const getSavedInput = async () =>
    {
        let savedItem = await AsyncStorage.getItem( 'text' )
        savedItem = JSON.parse( savedItem )
        if ( savedItem )
        {
            SetInput( savedItem )
        }

    }

    const [ input, SetInput ] = useState( '' )
    const { items, setItems } = useContext( GlobalContext )
    const res = featured.restaurants[ 0 ]
    const navigation = useNavigation()
    const btn_disable = items.length > 0 ? false : true
    const totalPrice = items.reduce( ( total, item ) => total + item.price * item.qty, 0 );
    return (
        <View style={ styles.container }>
            <TouchableOpacity style={ styles.btn }
                onPress={ () => { navigation.goBack() } }
            >
                <Ionicons name="arrow-back-outline" size={ 30 } color="white" />
            </TouchableOpacity>
            <View style={ { width: '100%', alignItems: 'center', padding: 20 } }>
                <Text style={ { fontSize: 20, fontWeight: 'bold', padding: 3 } }>Your Cart</Text>
                <Text style={ { color: 'gray' } }>{ res.name }</Text>
            </View>
            <View style={ styles.time }>
                <Image source={ require( '../assets/images/bikeGuy.png' ) } style={ { width: 80, height: 80 } }></Image>
                <Text style={ {} }>Deliver in 20-30 minutes</Text>
                <TouchableOpacity>
                    <Text style={ { fontWeight: 'bold', color: COLORS.main } }>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={ { maxHeight: 410 } }>

                <ScrollView
                    showsVerticalScrollIndicator={ false }
                    contentContainerStyle={ { paddingBottom: 150 } }
                >{
                        items.map( ( dish, index ) => <CartCard dish={ dish } key={ dish.id } /> )
                    }
                </ScrollView>

            </View>

            <View style={ styles.cost }>
                <View style={ { flex: 1, flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 50 } }>
                    <Text style={ { color: 'black' } } >subtotal</Text>
                    <Text style={ { color: 'black' } } >${ totalPrice }</Text>
                </View>
                <View style={ { flex: 1, flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 50 } }>
                    <Text style={ { color: 'black' } }>Delivery Fees</Text>
                    <Text style={ { color: 'black' } } >$10</Text>
                </View>
                <View style={ { flex: 1, flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 50 } }>
                    <Text style={ { fontWeight: 'bold', color: 'black' } }>Order Total</Text>
                    <Text style={ { fontWeight: 'bold', color: 'black' } }>${ totalPrice + 10 }</Text>

                </View>
                <View style={ { flex: 2, justifyContent: 'center', padding: 10 } }>

                    <TouchableOpacity style={ styles.btnplace }
                        onPress={ () => navigation.navigate( 'orderScreen' ) }
                        disabled={ btn_disable }
                    >
                        <Text style={ { fontWeight: 'bold', color: 'white', fontSize: 15 } }>Place Order</Text>
                    </TouchableOpacity>


                </View>


            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create( {
    container: {
        flex: 1,
        position: 'relative',

    },
    btn: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: 50,
        height: 50,
        backgroundColor: COLORS.main,
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    time: {

        width: '100%',
        height: 100,
        backgroundColor: COLORS.bg,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10
    },
    cost: {
        height: 180,
        width: '100%',
        backgroundColor: COLORS.bg,
        position: 'absolute',
        left: 0,
        bottom: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 10,
        flex: 5,
    },
    btnplace: {
        width: '90%',
        backgroundColor: COLORS.main,
        marginHorizontal: 'auto',
        borderRadius: 35,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: 15

    },
} );

//make this component available to the app
export default CartScreen;
