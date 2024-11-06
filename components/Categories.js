//import liraries
import React, { Component, useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { categories, featured } from '../constants';
import GlobalContext from '../context/ShoppingContext';
import { COLORS } from '../constants/styles';

// create a component
const Categories = () =>
{
    const [ ActiveCategory, setActiveCategory ] = useState()
    const { filtered, setFiltered } = useContext( GlobalContext )
    return (
        <View style={ styles.container }>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={ false }
                contentContainerStyle={ {
                    paddingHorizontal: 15
                } }
            >
                {
                    categories.map( ( category ) =>
                    {
                        let isActive = category.id === ActiveCategory;
                        return (
                            <View key={ category.id } style={ styles.categories }>
                                <TouchableOpacity style={ styles.listcontainer }
                                    onPress={ () => { setActiveCategory( category.id ), category.name == 'All' ? setFiltered( featured.restaurants ) : setFiltered( featured.restaurants.filter( ( res => res.category == category.name ) ) ) } }
                                >
                                    <View style={ styles.catlist( isActive ) }>
                                        <Image source={ category.image } style={ styles.img } />
                                    </View>

                                    <Text style={ isActive ? { color: 'black' } : { color: 'gray' } }>{ category.name }</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    } )
                }
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create( {
    container: {
        marginTop: 4

    },
    categories: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    listcontainer: {
        height: 90,
        width: 90,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    catlist: ( isActive ) => (
        {
            height: 65,
            width: 65,
            backgroundColor: isActive ? COLORS.main : COLORS.bg,
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
        }
    ),
    img: {
        height: 40,
        width: 40
    }
} );

//make this component available to the app
export default Categories;
