import { Routes } from '@angular/router';

export const routes: Routes = [

  // 🏠 Landing Page (FIRST PAGE)
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing').then(m => m.Landing),
    title: 'BettaHub'
  },

  // 🏠 Home Page (AFTER LOGIN)
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
    title: 'Home'
  },

  // 🔐 Auth
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.Login),
    title: 'Login'
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register').then(m => m.Register),
    title: 'Register'
  },

  // 🐟 Betta Types
  {
    path: 'betta-types',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/betta-types/betta-types').then(m => m.BettaTypes),
        title: 'Betta Types'
      },
      {
        path: 'alien',
        loadComponent: () =>
          import('./pages/betta-types/alien/alien').then(m => m.Alien),
        title: 'Alien Betta'
      },
      {
        path: 'avatar',
        loadComponent: () =>
          import('./pages/betta-types/avatar/avatar').then(m => m.Avatar),
        title: 'Avatar Betta'
      },
      {
        path: 'crowntail',
        loadComponent: () =>
          import('./pages/betta-types/crowntail/crowntail').then(m => m.Crowntail),
        title: 'Crowntail Betta'
      },
      {
        path: 'dragon',
        loadComponent: () =>
          import('./pages/betta-types/dragon/dragon').then(m => m.Dragon),
        title: 'Dragon Betta'
      },
      {
        path: 'dumbo',
        loadComponent: () =>
          import('./pages/betta-types/dumbo/dumbo').then(m => m.Dumbo),
        title: 'Dumbo Betta'
      },
      {
        path: 'giant',
        loadComponent: () =>
          import('./pages/betta-types/giant/giant').then(m => m.Giant),
        title: 'Giant Betta'
      },
      {
        path: 'halfmoon',
        loadComponent: () =>
          import('./pages/betta-types/halfmoon/halfmoon').then(m => m.Halfmoon),
        title: 'Halfmoon Betta'
      },
      {
        path: 'koi',
        loadComponent: () =>
          import('./pages/betta-types/koi/koi').then(m => m.Koi),
        title: 'Koi Betta'
      },
      {
        path: 'plakat',
        loadComponent: () =>
          import('./pages/betta-types/plakat/plakat').then(m => m.Plakat),
        title: 'Plakat Betta'
      },
      {
        path: 'samurai',
        loadComponent: () =>
          import('./pages/betta-types/samurai/samurai').then(m => m.Samurai),
        title: 'Samurai Betta'
      },
      {
        path: 'veiltail',
        loadComponent: () =>
          import('./pages/betta-types/veiltail/veiltail').then(m => m.Veiltail),
        title: 'Veiltail Betta'
      },
      {
        path: 'wild',
        loadComponent: () =>
          import('./pages/betta-types/wild/wild').then(m => m.Wild),
        title: 'Wild Betta'
      }
    ]
  },

  // 📸 Other Pages
  {
    path: 'gallery',
    loadComponent: () =>
      import('./pages/gallery/gallery').then(m => m.Gallery),
    title: 'Gallery'
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./pages/faq/faq').then(m => m.Faq),
    title: 'FAQ'
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.About),
    title: 'About'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(m => m.Contact),
    title: 'Contact'
  },
  {
    path: 'store',
    loadComponent: () =>
      import('./pages/store/store').then(m => m.Store),
    title: 'List of Store'
  },
  {
    path: 'care-guides',
    loadComponent: () =>
      import('./pages/care-guides/care-guides').then(m => m.CareGuides),
    title: 'Care Guides'
  },

  // ❌ fallback
  { path: '**', redirectTo: '' }
];
