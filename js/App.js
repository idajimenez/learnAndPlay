import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import { Text } from 'react-native';
import AppNavigator from './AppNavigator';
import getTheme from '../native-base-theme/components';

class App extends Component{
  render(){
    return(
      <StyleProvider style={getTheme()}>
        <AppNavigator />  
      </StyleProvider>
    );
  }
}

export default App;