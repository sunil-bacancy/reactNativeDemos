/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import AppNavigator from './src/routes/AppNavigator';
import 'react-native-gesture-handler';

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

