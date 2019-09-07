import React from 'react';
import {
  AppRegistry,
  View,
  asset,
  Environment,
  NativeModules,
  StyleSheet
} from 'react-360';
import VideoModule from 'VideoModule';

export default class Video extends React.Component {
  warehouse = VideoModule.createPlayer('warehouse');

  componentDidMount() {
    this.warehouse.play({
      source: {url: asset('./video/warehouse.mp4').uri},
      muted: false,
      volume: 0.1
    });

    Environment.setScreen(
      'default', /* screen name */
      'warehouse', /* player unique id */
      'video', /* surface name */
      0, 0, 850, 500 /* relative position on the surface */
    );
  }

  componentWillUnmount() {
    Environment.setScreen(
      'default', /* screen name */
      null, /* player unique id */
      'main', /* surface name */
      0, 0, 850, 500 /* relative position on the surface */
    );
    this.warehouse.destroy();
  }

  render() {
    return (
      <View style={styles.panel} />
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 850,
    height: 500,
  },
})

AppRegistry.registerComponent('Video', () => Video);
