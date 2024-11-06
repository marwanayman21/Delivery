import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import GlobalContext from '../context/ShoppingContext';
import { COLORS } from '../constants/styles';

const CartCard = ( { dish } ) =>
{
    const { items, setItems, storeData } = useContext( GlobalContext )
    const [ count, setCount ] = useState( 1 )
    const ubdate = [ ...items ]

    return (
        <View style={ styles.container }>
            <View style={ styles.imgContainer }>
                <Image source={ dish.image } style={ styles.img }></Image>
            </View>
            <View style={ styles.details }>
                <Text style={ { fontWeight: 'bold' } }>{ dish.name }</Text>
            </View>
            <View style={ styles.buy }>
                <Text style={ { fontWeight: 'bold' } }>${ dish.price * dish.qty }</Text>
            </View>
            <View style={ styles.count }>
                <TouchableOpacity style={ styles.btn }
                    onPress={ () =>
                    {

                        let qantitty = ubdate.find( e => e.id == dish.id )
                        qantitty.qty += 1
                        setItems( ubdate )
                        storeData()
                    } }
                >
                    <Text style={ { color: 'white' } }>+</Text>
                </TouchableOpacity>
                <Text>{ dish.qty }</Text>
                <TouchableOpacity style={ styles.btn }
                    onPress={ () =>
                    {
                        let qantitty = ubdate.find( e => e.id == dish.id )
                        qantitty.qty -= 1, qantitty.qty == 0 ? setItems( ubdate.filter( ( e ) => e.id !== dish.id ) ) :

                            setItems( ubdate )
                        storeData()
                    } }
                >
                    <Text style={ { color: 'white' } }>-</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 9,
        flexDirection: 'row',
        width: '90%',
        height: 80,
        margin: 5,
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
    count: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 3

    },
    imgContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    details: {
        flex: 2,
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
        width: 60,
        height: 60,
        borderRadius: 40
    },
    btn: {
        backgroundColor: COLORS.main,
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
} )

export default CartCard;
