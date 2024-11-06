//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { FontAwesome, Entypo, Feather } from '@expo/vector-icons';
import Categories from '../components/Categories';
import Features from '../components/Freatures';
import { featured } from '../constants/index';
import { COLORS } from '../constants/styles';
// create a component
const HomeScreen = () =>
{
    const [ input, setInput ] = useState( '' )
    return (
        <SafeAreaView style={ styles.container }>
            <StatusBar barStyle='' />

            <View style={ styles.seatchContainer } >
                <View style={ styles.search } >
                    <View style={ { flexDirection: 'row' } }>
                        <FontAwesome name="search" size={ 24 } color="black" />
                        <TextInput placeholder='restaurants'
                            style={ styles.input }
                            value={ input }
                            onChangeText={ ( text ) => { setInput( text ) } }
                        /></View>
                    <View style={ { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' } }>

                        <Text style={ { fontSize: 24, color: 'lightgrey', lineHeight: 25 } }>|</Text>

                        <Entypo name="location-pin" size={ 24 } color="black" />
                        <Text>Cairo,Egy</Text>
                    </View>
                </View>
                <View style={ styles.slidder }>
                    <Feather name="sliders" size={ 24 } color="white" />
                </View>

            </View>
            <ScrollView
                showsVerticalScrollIndicator={ false }
                contentContainerStyle={ { paddingBottom: 20 } }
            >
                <Categories />
                <View style={ { marginTop: 5 } }>
                    { [ featured, featured, featured ].map( ( item, index ) =>
                    {
                        return (
                            <Features key={ index } title={ item.title } restaurants={ item.restaurants } description={ item.description } input={ input } />
                        )
                    } ) }

                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',

    },
    seatchContainer: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '10px',
        width: '90%',

    },
    search: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 40,
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    slidder: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.main,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    input: {
        marginLeft: 10,
        maxWidth: 100

    },
} );

//make this component available to the app
export default HomeScreen;
