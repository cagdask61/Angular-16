import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';


export const APP_CONFIG: ApplicationConfig = {
  providers: [provideRouter(APP_ROUTES), provideAnimations()]
};
