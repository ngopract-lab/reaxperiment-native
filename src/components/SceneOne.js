import React from 'react';
import {
  Text, View, TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const SceneOne = () => (
  <View style={{
      flex: 1,
      backgroundColor: 'teal',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>
      SceneAgain!
    </Text>
    <TouchableOpacity>
      <Text>Go to SceneTwo</Text>
    </TouchableOpacity>
  </View>
);

export default SceneOne;
