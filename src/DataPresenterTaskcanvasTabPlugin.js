import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';

import DataOnCanvasComponent from './components/DataOnCanvas/DataOnCanvasComponent';

const PLUGIN_NAME = 'DataPresenterTaskcanvasTabPlugin';

export default class DataPresenterTaskcanvasTabPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    flex.TaskCanvasTabs.Content.add(<DataOnCanvasComponent key="data-on-canvas-comp" label="External Data"/>);
  }
}
