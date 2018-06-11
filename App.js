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
  // CONFIGURACIONES
  initialRouteName: 'Home',
  initialRouteParams: {
    nombre: 'Leonidas Esteban'
  },
  initialRouteKey: 'inicio',
  // paths: [],
  navigationOptions: {
    title: 'ola ke ase'
  },
  // CONFIGURACIONES VISUALES
  // mode: 'modal', // card (default)
  headerMode: 'float',
  // card | screen | none
  // float default en iOS, header fijo en pantalla,
  // screen default en Android, header entra con la pantalla,
  headerTransitionPreset: 'fade-in-place',
  //headerMode float tiene que estar activo
  //fade-in-place: hace un fadeIn en la pantalla
  //uikit: movimiento de izquierda a derecha
  cardStyle: {
    backgroundColor: 'white',
  },
  // estilo al componente que envuelve al screen
  // transitionConfig: (data) => {
  //   // console.log(data);
  //   return {
  //     containerStyle: {
  //       // borderWidth: 10,
  //       backgroundColor: 'black',
  //     },
  //     transitionSpec: {
  //       duration: 3000
  //     }
  //   }
  // },
  // onTransitionStart: (data) => {

  // },
  // onTransitionEnd: ({ navigation }) => {
  //   // navigation.navigate('Home');
  // }
})
