import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rum-gone',
    loadChildren: () => import('./rum-gone/rum-gone.module').then( m => m.RumGonePageModule)
  },
  {
    path: 'jds-song',
    loadChildren: () => import('./jds-song/jds-song.module').then( m => m.JdsSongPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies-module').then( m => m.MoviesPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
