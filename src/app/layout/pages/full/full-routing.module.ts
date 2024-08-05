import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullPage } from './full.page';


const routes: Routes = [
  {
    path: '',
    component: FullPage,
    children: [ {
      path: 'home',
      loadChildren: () => import( '../../../pages/home/home.module' ).then( m => m.HomePageModule )
    }, {
      path: 'settings',
      loadChildren: () => import( '../../../pages/settings/settings.module' ).then( m => m.SettingsPageModule )
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    } ]

  }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
} )
export class FullPageRoutingModule {}
