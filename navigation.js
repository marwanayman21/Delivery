import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderScreen from './screens/OrderScreen';
import DeliveryScreen from './screens/Delivery';
import { CartContextProvider } from './context/ShoppingContext';


const Stack = createNativeStackNavigator();

function Navigation ()
{
    return (
        <SafeAreaView style={ { flex: 1 } }>
            <CartContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={ {
                            headerShown: false
                        } }
                    >
                        <Stack.Screen name="Home" component={ HomeScreen } />
                        <Stack.Screen name="res" component={ RestaurantScreen } />
                        <Stack.Screen name="cart" options={ { presentation: 'modal' } } component={ CartScreen } />
                        <Stack.Screen name="orderScreen" options={ { presentation: 'modal' } } component={ OrderScreen } />
                        <Stack.Screen name="Delivery" options={ { presentation: 'modal' } } component={ DeliveryScreen } />
                    </Stack.Navigator>
                </NavigationContainer>
            </CartContextProvider>

        </SafeAreaView>

    );
}

export default Navigation;