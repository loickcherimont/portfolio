import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'realisations/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const { PROJECTS } = await import('./realisations/projects.service');
      return PROJECTS.map((project) => ({
        slug: project.slug,
      }));
    },
  },
  {
    path: 'mentions-legales',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
