import React from 'react';
import {
  AppRegistry,
  View,
  Image,
  Text,
  asset,
  StyleSheet,
  VrButton,
  NativeModules
} from 'react-360';

const surfaceModule = NativeModules.surfaceModule;


export default class InfoPanel extends React.Component {
  render() {
    return (
      <View style={styles.infoPanel}>
        <Image source={asset('forklift.jpg')}
          style={{
            width: 300,
            height: 200,
          }}
          />
        <Text>This is info about this particular spot.</Text>
        <VrButton style={styles.button} onClick={() => surfaceModule.destroyPanels()}>
          <Text>X</Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  infoPanel: {
    width: 300,
    height: 300,
    backgroundColor: 'red'
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'green'
  }
});

AppRegistry.registerComponent('InfoPanel', () => InfoPanel);
