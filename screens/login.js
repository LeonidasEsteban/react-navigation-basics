import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

class Login extends Component {
  navigate = () => {
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Page</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Login;
