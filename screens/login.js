import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

class Login extends Component {
  navigate = () => {
    this.props.navigation.navigate('About')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Page</Text>
        <Button
          title="Ir a About"
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
