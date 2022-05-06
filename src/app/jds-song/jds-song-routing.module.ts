import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JdsSongPage } from './jds-song.page';

const routes: Routes = [
  {
    path: '',
    component: JdsSongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JdsSongPageRoutingModule {}
