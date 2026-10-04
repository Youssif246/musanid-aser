import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'مؤسسة مساند آسر للإمداد والوساطة التجارية | Musaanid Aser'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'من نحن | About Us - Musaanid Aser'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'خدماتنا | Services - Musaanid Aser'
  },
  {
    path: 'sectors',
    loadComponent: () => import('./pages/sectors/sectors.component').then(m => m.SectorsComponent),
    title: 'القطاعات | Sectors - Musaanid Aser'
  },
  {
    path: 'request-quote',
    loadComponent: () => import('./pages/quote/quote.component').then(m => m.QuoteComponent),
    title: 'طلب تسعيرة | Request a Quote - Musaanid Aser'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
