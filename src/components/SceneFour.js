import React from 'react';
import {
  Text, View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const SceneFourText = () => (
  <Text style={{ padding: 50, color: 'white' }}>
    keren wogh
  </Text>
);

class SceneFour extends React.Component {
  render() {
    return (
      <View style={{
          flex: 1,
          backgroundColor: 'grey',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SceneFourText />
      </View>
    );
  }
}

export default SceneFour;
