import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import { hmrBootstrap } from './hmr';

if (environment.production) {
  enableProdMode();
}

const sadasd = 1;

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));



if (environment.hmr) {
  if (module['hot']) {
    console.log('test');
    hmrBootstrap(module, bootstrap);
    console.log(`test ${sadasd} sasda`);
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap().catch(err => console.log(err));
}

