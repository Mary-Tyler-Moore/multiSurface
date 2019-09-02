import React from 'react';
import {
  AppRegistry,
  View,
  Image,
  asset,
} from 'react-360';

export default class flatcomponent1 extends React.Component {
  render() {
    return (
      <View>
        <Image source={asset('info-1.png')}
          style={{
            width: 100,
            height: 100,
          }}
          />
      </View>
    );
  }
};