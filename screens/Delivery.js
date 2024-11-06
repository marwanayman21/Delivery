//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { featured } from '../constants';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { Entypo, Octicons } from '@expo/vector-icons';
import { COLORS } from '../constants/styles';

// create a component
const DeliveryScreen = () =>
{
    const res = featured.restaurants[ 0 ];
    const navigation = useNavigation()
    return (
        <View style={ styles.container }>
            <MapView
                initialRegion={ {
                    latitude: res.lat,
                    longitude: res.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                } }
                style={ { flex: 1, } }
                maptype='standard'
            >
                <Marker
                    coordinate={ {
                        latitude: res.lat,
                        longitude: res.lng,
                    } }
                    title={ res.name }
                    description={ res.description }
                    pinColor={ COLORS.main }
                />
            </MapView>
            <View style={ styles.trip }>
                <View style={ styles.time }>
                    <View style={ { flexDirection: 'row', flex: 2 } }>
                        <View style={ { justifyContent: 'center', alignItems: 'start', flex: 1, marginHorizontal: 30 } }>
                            <Text>Estimation Arrival</Text>
                            <Text style={ { fontSize: 20, fontWeight: 'bold' } }>20-30 Minutes</Text>
                            <Text>your order is on way</Text>
                        </View>
                        <View style={ { justifyContent: 'center', alignItems: 'center', flex: 1 } }>
                            <Image source={ require( '../assets/images/bikeGuy.png' ) } style={ { height: '90%', width: '70%' } }></Image>
                        </View>
                    </View>

                </View>
                <View style={ styles.driver }>
                    <View style={ styles.addbtn }
                    >
                        <View style={ { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } }>
                            <View style={ { backgroundColor: 'rgba(225,225,225,0.3)', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginHorizontal: -5 } }>
                                <Image style={ { width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' } } source={ require( '../assets/images/ag.jpg' ) }></Image>
                            </View>
                            <View style={ { flexDirection: 'column', paddingHorizontal: 10 } }>
                                <Text style={ { fontWeight: 'bold', color: 'white', textTransform: 'capitalize' } }>antoine griezmann</Text>
                                <Text style={ { fontWeight: 'bold', color: 'white' } }>driver</Text>
                            </View>
                        </View>

                        <View style={ { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } }>
                            <View style={ { backgroundColor: 'white', width: 40, height: 40, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 } }>
                                <Entypo name="phone" size={ 24 } color={ COLORS.main } />
                            </View>
                            <View style={ { backgroundColor: 'white', width: 40, height: 40, borderRadius: 30, justifyContent: 'center', alignItems: 'center', } }>
                                <Octicons name="x" size={ 24 } color="red" style={ { fontWeight: 'bold' } } />
                            </View>
                        </View>

                    </View>
                </View>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        position: 'relative',

    },
    trip: {
        height: '35%',
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        left: 0,
        bottom: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 10,
        flex: 2,

    },
    driver: {
        flex: 1,

    },
    time: {
        flex: 1,
        flexDirection: 'row'
    },
    addbtn: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 15,
        width: '95%',
        backgroundColor: COLORS.main,
        height: 80,
        marginHorizontal: 'auto',
        borderRadius: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 15
    },
} );

//make this component available to the app
export default DeliveryScreen;
