// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
/*
  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('multiSurface', { }),
    r360.getDefaultSurface()
  ); 
*/

const myFlatSurface1 = new Surface(
  100,
  100,
  Surface.SurfaceShape.Flat
);

const myFlatSurface2 = new Surface(
  100,
  100,
  Surface.SurfaceShape.Flat
);

const myFlatSurface3 = new Surface(
  100,
  100,
  Surface.SurfaceShape.Flat
);

const myFlatSurface4 = new Surface(
  100,
  100,
  Surface.SurfaceShape.Flat
);

const myFlatSurface5 = new Surface(
  100,
  100,
  Surface.SurfaceShape.Flat
);

const myFlatSurface6 = new Surface(
  100,
  100,
  Surface.SurfaceShape.Flat
);

const myFlatSurface7 = new Surface(
  100,
  100,
  Surface.SurfaceShape.Flat
);

myFlatSurface1.setAngle(
  0,
  0,
  0
);

myFlatSurface2.setAngle(
  0.8974483,
  0,
  0
);

myFlatSurface3.setAngle(
  1.79,
  0,
  0
);

myFlatSurface4.setAngle(
  2.69,
  0,
  0
);

myFlatSurface5.setAngle(
  3.58,
  0,
  0
);

myFlatSurface6.setAngle(
  4.48,
  0,
  0
);

myFlatSurface7.setAngle(
  5.38,
  0,
  0
);



r360.renderToSurface(
  r360.createRoot('flatcomponent1', { }),
  myFlatSurface1
);

r360.renderToSurface(
  r360.createRoot('flatcomponent2', { }),
  myFlatSurface2
);

r360.renderToSurface(
  r360.createRoot('flatcomponent3', { }),
  myFlatSurface3
);

r360.renderToSurface(
  r360.createRoot('flatcomponent4', { }),
  myFlatSurface4
);

r360.renderToSurface(
  r360.createRoot('flatcomponent5', { }),
  myFlatSurface5
);

r360.renderToSurface(
  r360.createRoot('flatcomponent6', { }),
  myFlatSurface6
);

r360.renderToSurface(
  r360.createRoot('flatcomponent7', { }),
  myFlatSurface7
);

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('factory-min.jpeg'));
}

window.React360 = {init};
