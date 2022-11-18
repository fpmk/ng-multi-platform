export const APP_ROUTES = [
  {
    path: '',
    loadChildren: () => {
      if (isDesktop()) {
        return import('./desktop/desktop.routes').then(m => m.ROUTES);
      } else {
        return import('./mobile/mobile.routes').then(m => m.ROUTES);
      }
    }
  },
];

function isDesktop(): boolean {
  return window.innerWidth > 768;
}
