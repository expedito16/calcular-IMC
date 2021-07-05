import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IMCPage } from './imc.page';

const routes: Routes = [
  {
    path: '',
    component: IMCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IMCPageRoutingModule {}
