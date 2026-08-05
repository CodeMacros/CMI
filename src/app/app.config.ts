import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoaderInterceptor } from './loader/loader-interceptor';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes'



// const MyPreset = definePreset(Aura, {
//   semantic: {
//     primary: {
//       50: '#FDECEF',
//       100: '#F9CDD7',
//     }
//   }
// });


export const appConfig: ApplicationConfig = {


  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptorsFromDi()
    ),

    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};
