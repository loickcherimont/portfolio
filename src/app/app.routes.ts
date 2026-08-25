import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'realisations/:slug',
    loadComponent: () =>
      import('./realisations/project-detail/project-detail').then((m) => m.ProjectDetail),
  },
  {
    // Lazy loading: the component is only fetched when the user navigates to this
    // route (`import()` returns a promise Angular resolves on demand). An eager
    // `component:` import would bundle it into the initial JS payload and slow
    // down first paint for a page most visitors never open.
    path: 'mentions-legales',
    loadComponent: () => import('./legal-mentions/legal-mentions').then((m) => m.LegalMentions),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
