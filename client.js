// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface, Module} from 'react-360-web';

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    nativeModules: [
      new surfaceModule(),
    ],
    fullScreen: true,
    ...options,
  });

  videoPanel = new Surface(
    850,
    500,
    Surface.SurfaceShape.Flat
  );

  infoPanel = new Surface(
    300,
    300,
    Surface.SurfaceShape.Flat
  );

  const surfOne = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  const surfTwo = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  const surfThree = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  const surfFour = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  const surfFive = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  const surfSix = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  const surfSeven = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  surfOne.setAngle(
    0,
    0,
    0
  );

  surfTwo.setAngle(
    0.8974483,
    0,
    0
  );

  surfThree.setAngle(
    1.79,
    0,
    0
  );

  surfFour.setAngle(
    2.69,
    0,
    0
  );

  surfFive.setAngle(
    3.58,
    0,
    0
  );

  surfSix.setAngle(
    4.48,
    0,
    0
  );

  surfSeven.setAngle(
    5.38,
    0,
    0
  );

  imagePoint = 1
  surfaces = [surfOne, surfTwo, surfThree, surfFour, surfFive, surfSix, surfSeven]
  surfaces.forEach(function(surface) {
    r360.renderToSurface(
      r360.createRoot('multiSurface', { imagePoint: `${imagePoint}` }),
      surface
    );
    imagePoint++;
  })

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('factory-min.jpeg'));
}

class surfaceModule extends Module {
  constructor() {
    super('surfaceModule');
  }

  info() {
    infoPanel.setAngle(
      -0.5,
      0,
      0
    );

    infoRoot = r360.renderToSurface(
      r360.createRoot('InfoPanel', {}),
      infoPanel,
    );

    videoPanel.setAngle(
      0.5,
      0,
      0
    );

    videoRoot = r360.renderToSurface(
      r360.createRoot('Video', {}),
      videoPanel,
      'video'
    );
  }

  destroyPanels() {
    r360.detachRoot(videoRoot);
    r360.detachRoot(infoRoot);
  }
}


window.React360 = {init};
