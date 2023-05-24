import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: '', loadComponent: () => import('./components/main/main.component') },
    { path: 'signals', loadChildren: () => import('./components/signals/signals.routes') },
    { path: '**', loadComponent: () => import('./components/not-found/not-found.component') },
];