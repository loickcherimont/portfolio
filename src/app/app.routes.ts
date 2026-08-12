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
    path: '**',
    redirectTo: '',
  },
];
