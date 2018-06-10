import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './screens/home';
import Profile from './screens/profile';
import Login from './screens/login';
import About from './screens/about';


export default createStackNavigator({
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile,
  },
  Login: {
    screen: Login,
  },
  About: {
    screen: About
  }
}, {
  navigationOptions: {
    title: 'Hola mundo desde la Home',
  }
})
