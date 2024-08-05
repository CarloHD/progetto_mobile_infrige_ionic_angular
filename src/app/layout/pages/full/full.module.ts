import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertController, IonicModule } from '@ionic/angular';

import { FullPageRoutingModule } from './full-routing.module';

import { FullPage } from './full.page';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullPageRoutingModule,
    SidenavComponent,
  ],
  declarations: [FullPage]
})
export class FullPageModule {}

