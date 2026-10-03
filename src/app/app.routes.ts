import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'مساند عسير للتوريد والوساطة التجارية | Musaned Aser'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'من نحن | About Us - Musaned Aser'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'خدماتنا | Services - Musaned Aser'
  },
  {
    path: 'sectors',
    loadComponent: () => import('./pages/sectors/sectors.component').then(m => m.SectorsComponent),
    title: 'القطاعات | Sectors - Musaned Aser'
  },
  {
    path: 'request-quote',
    loadComponent: () => import('./pages/quote/quote.component').then(m => m.QuoteComponent),
    title: 'طلب تسعيرة | Request a Quote - Musaned Aser'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
