//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const OrderScreen = () =>
{
    const navigation = useNavigation()
    useEffect( () =>
    {
        setTimeout( () =>
        {
            navigation.navigate( 'Delivery' )
        }, 3000 )
    }, [] )
    return (
        <View style={ styles.container }>
            <View style={ { width: "90%" } }>
                <Image source={ require( '../assets/images/delivery.gif' ) }
                    style={ styles.gif }
                ></Image>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    gif: {
        width: '100%',
        height: '70%',
        padding: 40
    }
} );

//make this component available to the app
export default OrderScreen;
