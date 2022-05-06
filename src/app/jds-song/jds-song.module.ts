import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JdsSongPageRoutingModule } from './jds-song-routing.module';

import { JdsSongPage } from './jds-song.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JdsSongPageRoutingModule
  ],
  declarations: [JdsSongPage]
})
export class JdsSongPageModule {}
