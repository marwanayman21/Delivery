import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';
import DishCard from '../components/DishCard';
import GlobalContext from '../context/ShoppingContext';
import { COLORS } from '../constants/styles';

const RestaurantScreen = () =>
{
    const { params } = useRoute();
    let res = params
    const navigation = useNavigation()
    const { items } = useContext( GlobalContext )
    const totalPrice = items.reduce( ( total, item ) => total + item.price, 0 );
    return (
        <View style={ styles.container }>
            <StatusBar style="" />
            <ScrollView
                contentContainerStyle={ {
                    flex: 1,
                    position: 'relative',
                    backgroundColor: 'red'
                } }
            >
                <TouchableOpacity style={ styles.btn }
                    onPress={ () => { navigation.goBack() } }
                >
                    <Ionicons name="arrow-back-outline" size={ 30 } color={ COLORS.main } />
                </TouchableOpacity>
                <Image source={ res.image } style={ styles.img }></Image>
                <View style={ styles.menu }>
                    <Text style={ styles.name }>{ res.name }</Text>
                    <View style={ styles.details }>
                        <AntDesign name="star" size={ 18 } color="#FFEA20" />
                        <Text style={ { color: 'green', paddingHorizontal: 2, fontSize: 10 } }>{ res.stars }</Text>
                        <Text style={ { color: 'gray', fontSize: 10 } }>({ res.reviews } review)</Text>
                        <Text style={ { paddingHorizontal: 2, lineHeight: 15 } }>.</Text>
                        <Text style={ { fontSize: 10, paddingRight: 10 } }> { res.category }</Text>
                        <EvilIcons name="location" size={ 18 } color="black" />
                        <Text style={ { color: 'gray', fontSize: 10 } }>Nearby</Text>
                        <Text style={ { paddingHorizontal: 2, lineHeight: 15 } }>.</Text>
                        <Text style={ { fontSize: 10 } }>{ res.address }</Text>
                    </View>
                    <Text style={ { padding: 4, color: 'gray' } }>{ res.description }</Text>
                    <Text style={ { fontSize: 18, fontWeight: 'bold', paddingTop: 10 } }>Menu</Text>
                    <ScrollView
                        showsVerticalScrollIndicator={ false }
                        contentContainerStyle={ styles.contentContainerStyle }
                    >{
                            res.dishes.map( ( dish, index ) => <DishCard key={ dish.id } dish={ dish } /> )
                        }</ScrollView>
                </View>
            </ScrollView>
            <TouchableOpacity style={ styles.addbtn }
                onPress={ () => { navigation.navigate( 'cart' ) } }
            >
                <View style={ { backgroundColor: 'rgba(225,225,225,0.3)', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' } }>
                    <Text style={ { fontWeight: 'bold', color: 'white' } }>{ items.length }</Text>
                </View>
                <Text style={ { fontWeight: 'bold', color: 'white', fontSize: 18 } }>View Cart</Text>
                <Text style={ { fontWeight: 'bold', color: 'white' } }>${ totalPrice }</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,

    },
    img: {
        width: '100%',
        height: '40%'
    },
    menu: {
        backgroundColor: 'white',
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingHorizontal: 20
    },
    btn: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: 50,
        height: 50,
        backgroundColor: 'white',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    name: {
        marginVertical: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    details: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap'
    },
    addbtn: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 15,
        width: '86%',
        backgroundColor: COLORS.main,
        height: 70,
        marginHorizontal: 'auto',
        borderRadius: 35,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 15
    },
    contentContainerStyle: {
        paddingBottom: 80,
    }
} )

export default RestaurantScreen;
