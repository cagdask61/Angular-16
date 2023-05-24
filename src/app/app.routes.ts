import { Routes } from '@angular/router';

import SignalsComponent from './components/signals/signals.component';

export const APP_ROUTES: Routes = [
    { path: '', loadComponent: () => import('./components/main/main.component') },

    { path: 'signals', component: SignalsComponent, loadChildren: () => import('./components/signals/signals.routes') },

    { path: '**', loadComponent: () => import('./components/not-found/not-found.component') },
];