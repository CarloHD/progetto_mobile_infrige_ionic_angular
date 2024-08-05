import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../../../pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../../../pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FullPageRoutingModule {}
