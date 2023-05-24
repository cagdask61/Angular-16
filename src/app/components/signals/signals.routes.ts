import { Routes } from "@angular/router";


const SIGNALS_ROUTES: Routes = [
    { path: '', redirectTo: 'set', pathMatch: "full" },
    { path: 'set', loadComponent: () => import('./set/set.component') },
    { path: 'update', loadComponent: () => import('./update/update.component') },
    { path: 'effect', loadComponent: () => import('./effect/effect.component') },
    { path: 'mutate', loadComponent: () => import('./mutate/mutate.component') },
    { path: 'computed', loadComponent: () => import('./computed/computed.component') },
    { path: 'untracked', loadComponent: () => import('./untracked/untracked.component') },
    { path: 'injection-token', loadComponent: () => import('./injection-token/injection-token.component') },
    { path: 'form', loadComponent: () => import('./form/form.component') },
    { path: 'all', loadComponent: () => import('./all/all.component') },
]

export default SIGNALS_ROUTES;