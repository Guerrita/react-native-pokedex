import React from 'react'
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Favorite from '../screens/Favorite';
import Pokedex from '../screens/Pokedex';
import Account from '../screens/Account';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'Favoritos',
          title: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Icon name='heart' color={color} size={size} />
          )
        }}
        name='Favorite'
        component={Favorite} />
      <Tab.Screen 
      name='Pokedex' 
      component={Pokedex} 
      options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name='Account'
        component={Account}
        options={{
          tabBarLabel: 'Cuenta',
          tabBarIcon: ({ color, size }) => (
            <Icon name='user' color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

function renderPokeball() {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -20}}
    />
  )
}