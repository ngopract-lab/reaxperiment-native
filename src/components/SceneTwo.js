import React from 'react';
import {
  Text, View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const SceneTwoText = () => (
  <Text style={{ padding: 50, color: 'white' }}>
    keren kk!!!
  </Text>
);

class SceneTwo extends React.Component {
  render() {
    return (
      <View style={{
          flex: 1,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SceneTwoText />
      </View>
    );
  }
}

export default SceneTwo;
