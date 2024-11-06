//import liraries
import React, { Component, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ResCards from './ResCards';
import GlobalContext from '../context/ShoppingContext';
import { COLORS } from '../constants/styles';

// create a component
const Features = ( { title, description, restaurants, input } ) =>
{
    const { filtered, setFiltered } = useContext( GlobalContext )
    const [ value, setValue ] = useState( '' )
    useEffect( () => { setValue( input ) }, [ input ] )
    useEffect( () => { setFiltered( restaurants ) }, [] )
    return (
        <View style={ styles.container }>
            <View style={ styles.headerContainer }>
                <View style={ styles.header }>
                    <Text style={ styles.title } >{ title }</Text>
                    <Text style={ styles.description }>{ description }</Text>
                </View>
                <TouchableOpacity >
                    <Text style={ styles.btn }>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={ false }
                contentContainerStyle={ {
                    gap: 10,
                } }
            >
                { filtered.map( ( restaurant, index ) =>
                {

                    if ( value === '' )
                    {
                        return (
                            <ResCards key={ index } res={ restaurant } />
                        )
                    }
                    if ( restaurant.name.toLowerCase().includes( value.toLowerCase() ) )
                    {
                        return (
                            <ResCards key={ index } res={ restaurant } />
                        )
                    }


                } ) }
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create( {
    container: {
        marginHorizontal: 15,
        paddingVertical: 8
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        color: 'gray'
    },
    btn: {
        alignSelf: 'center',
        color: COLORS.main,
        fontWeight: 'bold',
        marginVertical: 'auto',
    },

} );

//make this component available to the app
export default Features;
