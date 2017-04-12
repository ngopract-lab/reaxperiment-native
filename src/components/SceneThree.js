import React from 'react';
import {
  Text, View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const SceneThreeText = () => (
  <Text style={{ padding: 50, color: 'white' }}>
    keren wogh
  </Text>
);

class SceneThree extends React.Component {
  render() {
    return (
      <View style={{
          flex: 1,
          backgroundColor: 'maroon',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SceneThreeText />
      </View>
    );
  }
}

export default SceneThree;
