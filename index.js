import React from 'react';
import {
  AppRegistry,
  View,
  VrButton,
  Image,
  asset,
  Text,
  NativeModules,
  StyleSheet
} from 'react-360';
import Video from './components/video-component';
import InfoPanel from './components/infoPanel-component';
const surfaceModule = NativeModules.surfaceModule;

export default class multiSurface extends React.Component {
  render() {
    return (
      <View>
        <VrButton style={styles.pointOfInterest} onClick={() => surfaceModule.info()}>
          <Image source={asset(`info-${this.props.imagePoint}.png`)}
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

const styles = StyleSheet.create({
  pointOfInterest: {
    width: 100,
    height: 100,
    backgroundColor: '#F7F7F7',
  }
});

AppRegistry.registerComponent('multiSurface', () => multiSurface);
