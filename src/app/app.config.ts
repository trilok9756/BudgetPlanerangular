import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideServerRendering } from '@angular/platform-server';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideAnimations()]
};
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
