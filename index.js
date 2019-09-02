import React from 'react';
import {
  AppRegistry,
  View,
  Image,
  asset,
  NativeModules
} from 'react-360';
import flatcomponent1 from './components/flatcomponent1';
import flatcomponent2 from './components/flatcomponent2';
import flatcomponent3 from './components/flatcomponent3';
import flatcomponent4 from './components/flatcomponent4';
import flatcomponent5 from './components/flatcomponent5';
import flatcomponent6 from './components/flatcomponent6';
import flatcomponent7 from './components/flatcomponent7';

export default class multiSurface extends React.Component {
  render() {
    return (
      <View>
        <VrButton onClick={() => this.createMyPlayer()}>
            <View style={StyleSheet.greetingBox}></View>
        <Image source={asset('floor-plan.png')}
          style={{
            width: 100,
            height: 100,
          }}
          />
          </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('multiSurface', () => multiSurface);
AppRegistry.registerComponent('flatcomponent1', () => flatcomponent1);
AppRegistry.registerComponent('flatcomponent2', () => flatcomponent2);
AppRegistry.registerComponent('flatcomponent3', () => flatcomponent3);
AppRegistry.registerComponent('flatcomponent4', () => flatcomponent4);
AppRegistry.registerComponent('flatcomponent5', () => flatcomponent5);
AppRegistry.registerComponent('flatcomponent6', () => flatcomponent6);
AppRegistry.registerComponent('flatcomponent7', () => flatcomponent7);