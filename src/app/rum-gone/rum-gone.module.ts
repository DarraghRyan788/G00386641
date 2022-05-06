import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RumGonePageRoutingModule } from './rum-gone-routing.module';

import { RumGonePage } from './rum-gone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RumGonePageRoutingModule
  ],
  declarations: [RumGonePage]
})
export class RumGonePageModule {}
