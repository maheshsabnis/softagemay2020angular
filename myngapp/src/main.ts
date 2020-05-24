import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// load and bootstrap the AppModule in a browser
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
