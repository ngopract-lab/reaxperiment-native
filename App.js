import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Scene, Router, Actions } from 'react-native-router-flux';

import SceneOne from './src/components/SceneOne';
import SceneTwo from './src/components/SceneTwo';

class MainScene extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, color: 'teal' }}>Reaxperiment Natives</Text>
        <Text>up App.js to start working on your wowza!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <TouchableOpacity
          onPress={Actions.one}
          style={{ backgroundColor: 'teal', margin: 20, padding: 20 }}
        >
          <Text style={{ color: 'white' }}>Go to SceneOne</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={Actions.two}
          style={{ backgroundColor: 'blue', margin: 20, padding: 20 }}
        >
          <Text style={{ color: 'white' }}>Go to SceneTwo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="main" component={MainScene} title="Main"/>
          <Scene key="one" component={SceneOne} title="One"/>
          <Scene key="two" component={SceneTwo} title="Two"/>
        </Scene>
      </Router>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
