import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Scene, Router, Actions } from 'react-native-router-flux';

import SceneOne from './src/components/SceneOne';
import SceneTwo from './src/components/SceneTwo';
import SceneThree from './src/components/SceneThree';

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
          onPress={Actions.tabbar}
          style={{ backgroundColor: 'blue', margin: 20, padding: 20 }}
        >
          <Text style={{ color: 'white' }}>Go to Scene with Tab</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const TabIcon = ({ selected, title }) => (
  <Text style={{ color: selected ? 'teal': 'black'}}>{title}</Text>
);

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="main" component={MainScene} title="Main"/>
          <Scene key="one" component={SceneOne} title="One"/>
          <Scene key="tabbar" tabs tabBarStyle={{ backgroundColor: 'white'}}>
            <Scene key="innerone" title="tabOne" icon={TabIcon}>
              <Scene key="two" component={SceneTwo} title="Two Inner" />
            </Scene>
            <Scene key="innertwo" title="tabTwo" icon={TabIcon}>
              <Scene key="three" component={SceneThree} title="Two Inner" />
            </Scene>
          </Scene>
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
