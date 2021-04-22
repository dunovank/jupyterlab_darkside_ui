import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @dunovank/jupyterlab_legos_ui extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@dunovank/jupyterlab_legos_ui',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    // console.log(`JupyterLab·extension·@dunovank/jupyterlab_legos_ui·is·activated!`);
    const style = '@dunovank/jupyterlab_legos_ui/index.css';
    manager.register({
      name: '@dunovank/jupyterlab_legos_ui',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
