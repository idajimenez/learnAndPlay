import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Profile from './containers/Profile/ProfileContainer';
import Home from './containers/Home/HomeContainer';

const AppNavigation = DrawerNavigator(
  {
    Home: { screen: StackNavigator({ Home: { screen: Home } }) },
    Profile: { screen: StackNavigator({ Profile: { screen: Profile }}) }
  },
  {
    contentOptions: {
      activeTintColor: '#e91e63',
    }
  }
);
export default AppNavigation;