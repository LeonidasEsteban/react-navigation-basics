import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

class Profile extends Component {
  navigate = () => {
    console.log(this.props)
    this.props.navigation.navigate('Login')
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('nombre', 'Perfil'),
      // header: <Text>{navigation.getParam('nombre', 'Perfil')}</Text>
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Page</Text>
        <Text>{this.props.navigation.getParam('nombre')}</Text>
        <Button
          title="Ir al login"
          onPress={this.navigate}
        />
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Profile;
