declare var __REACT__: string;
declare var __REACTDOM__: string;
declare var __GLOBALNAVUILIB__: string;

import "es6-symbol/implement";
import "es6-object-assign/auto";
import * as require from "requirejs";
import {
  ILauncher,
  ILauncherProps,
  IHeaderFooterData,
  IHeaderProps,
  IFooterProps
} from "@sp-dev-fx-extensions/globalnavcommon";

export class bootstrapper {
  private LOG_SOURCE: string = 'GlobalNavClassicBootstrapper';
  private _globalNavUI: any;
  private _headerElementId: string = "GlobalNavApplicationCustomizerHeader";
  private _footerElementId: string = "GlobalNavApplicationCustomizerFooter";

  constructor(global) {
    this._globalNavUI = global;
  }

  public async onInit(): Promise<void> {
    // Create the div elements to hold the header and footer
    const header = document.createElement("div");
    header.setAttribute("id", this._headerElementId);

    const footer = document.createElement("div");
    footer.setAttribute("id", this._footerElementId);

    // Insert the header and footer on the page
    const ribbon = document.getElementById('s4-ribbonrow');
    const workspace = document.getElementById('s4-workspace');

    if (workspace) {
      ribbon.parentElement.insertBefore(header, ribbon);
      workspace.appendChild(footer);

      // Get the header and footer data and render it
      let navigationData: IHeaderFooterData = await this._globalNavUI.HeaderFooterDataService.get();

      // Set up Header
      const headerProps: IHeaderProps = { links: navigationData.headerLinks }
      let navLauncher: ILauncher = new this._globalNavUI.Launcher({
        domElement: header,
        reactControl: this._globalNavUI.Header,
        controlProps: headerProps
      } as ILauncherProps);
      navLauncher.launch();

      // Set up Footer
      const footerProps: IFooterProps = { links: navigationData.footerLinks, message: "Copyright 2020 Contoso Electronics" }
      let footerLauncher: ILauncher = new this._globalNavUI.Launcher({
        domElement: footer,
        reactControl: this._globalNavUI.Footer,
        controlProps: footerProps
      } as ILauncherProps);
      footerLauncher.launch();

    } else {
      // The element we want to attach to is missing
      console.error(this.LOG_SOURCE, new Error(`Header or Footer element  not available!`));
    }
    return Promise.resolve();
  }
}

// Set up requireJS to bootstrap external files
require.config({
  paths: {
    'react': __REACT__,
    'react-dom': __REACTDOM__,
    '@sp-dev-fx-extensions/globalnavcommon': __GLOBALNAVUILIB__
  }
});

// Once the externals are loaded then run the bootstrap code
require(['react', 'react-dom', '@sp-dev-fx-extensions/globalnavcommon'],
  function (React, ReactDOM, global) {
    (window as any).ExecuteOrDelayUntilBodyLoaded(function () {
      if (window.location.search.indexOf('IsDlg=1') < 0) {
        let b = new bootstrapper(global);
        b.onInit();
      }
    });
  });