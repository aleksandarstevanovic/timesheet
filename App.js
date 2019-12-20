import Login from './components/Login'
import React from 'react';
import { StyleSheet, TextInput, View, Button} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



class App extends React.Component {
 
  render() {
   
    return (
<View>
  <Login/>
</View>
    );
  }
}

export default App