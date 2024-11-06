//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


// create a component
const ResCards = ( { res } ) =>
{
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback style={ styles.card }
            onPress={ () => navigation.navigate( 'res', { ...res } ) }

        >
            <View style={ styles.container }>
                <ImageBackground source={ res.image } style={ styles.IMGcontainer }></ImageBackground>
                <View style={ styles.INFOcontainer }>
                    <Text style={ styles.name }>{ res.name }</Text>
                    <View style={ styles.details }>
                        <AntDesign name="star" size={ 20 } color="#FFEA20" />
                        <Text style={ { color: 'green', paddingHorizontal: 5, fontSize: 12 } }>{ res.stars }</Text>
                        <Text style={ { color: 'gray', fontSize: 12 } }>({ res.reviews } review)</Text>
                        <Text style={ { paddingHorizontal: 3, lineHeight: 15 } }>.</Text>
                        <Text > { res.category }</Text>
                    </View>
                    <View style={ styles.details }>
                        <EvilIcons name="location" size={ 20 } color="black" />
                        <Text style={ { color: 'gray', paddingHorizontal: 2, fontSize: 12 } }>Nearby</Text>
                        <Text style={ { paddingHorizontal: 3, lineHeight: 15 } }>.</Text>
                        <Text style={ { color: 'gray', fontSize: 12 } }>{ res.address }</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
};

// define your styles
const styles = StyleSheet.create( {
    card: {



    },
    container: {
        flex: 7,
        width: 250,
        height: 250,
        marginVertical: 10,
        borderRadius: 20,
        overflow: 'hidden',
        shadowColor: 'teal',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
        marginHorizontal: 3
    },
    IMGcontainer: {
        flex: 4,


    },
    INFOcontainer: {
        flex: 3,
        backgroundColor: 'white',
        padding: 5,
        justifyContent: 'space-around'

    },
    name: {
        fontWeight: 'bold',
        marginHorizontal: 5
    },
    details: {
        flexDirection: 'row',
        marginHorizontal: 5,

    },
} );

//make this component available to the app
export default ResCards;
