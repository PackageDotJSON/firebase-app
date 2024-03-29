import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('../modules/feature/feature.module').then(
            (m) => m.FeatureModule
          ),
      },
    ],
  },
];
