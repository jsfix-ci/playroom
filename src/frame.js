import React from 'react';
import { renderElement } from './render';
import Frame from './Playroom/Frame';

const outlet = document.createElement('div');
document.body.appendChild(outlet);

const renderFrame = ({
  themes = require('./themes'),
  components = require('./components'),
  FrameComponent = require('./frameComponent'),
} = {}) => {
  renderElement(
    <Frame
      components={components}
      themes={themes}
      FrameComponent={FrameComponent}
    />,
    outlet
  );
};
renderFrame();

if (module.hot) {
  module.hot.accept('./components', () => {
    renderFrame({ components: require('./components') });
  });

  module.hot.accept('./themes', () => {
    renderFrame({ themes: require('./themes') });
  });

  module.hot.accept('./frameComponent', () => {
    renderFrame({ FrameComponent: require('./frameComponent') });
  });
}
