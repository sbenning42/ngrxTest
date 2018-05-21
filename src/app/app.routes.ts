import { Routes } from '@angular/router';

import { HomePageComponent } from './components/containers/home-page/home-page.component';
import { PageNotFoundComponent } from './components/containers/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'home',
    component: HomePageComponent,
    data: { title: 'Home Page' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];