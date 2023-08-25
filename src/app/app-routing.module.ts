import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'browse',
      },
      {
        path: 'browse',
        loadChildren: () => import('./browse/browse.module').then(m => m.BrowsePageModule),
      },
      {
        path: 'favorites',
        loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
      },
    ],
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
