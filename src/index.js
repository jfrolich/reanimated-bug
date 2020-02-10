import React from 'react';
import ReactDOM from 'react-dom';
import { View, Text } from 'react-native';
import Animated from 'react-native-reanimated';

function App() {
  return (
    <View>
      <Animated.View style={{ transform: [{ rotateZ: '-10deg' }] }}>
        <View
          style={{ width: 100, height: 100, backgroundColor: 'blue' }}
        ></View>
      </Animated.View>
      <View style={{ transform: [{ rotateZ: '-10deg' }] }}>
        <View
          style={{ width: 100, height: 100, backgroundColor: 'red' }}
        ></View>
      </View>
    </View>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
