import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

class Home extends Component {
  navigate = () => {
    console.log(this.props)
    this.props.navigation.navigate('Profile')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
        <Button
          title="Ir al perfil"
          onPress={this.navigate}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Home;
