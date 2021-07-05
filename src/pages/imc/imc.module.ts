import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IMCPageRoutingModule } from './imc-routing.module';

import { IMCPage } from './imc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IMCPageRoutingModule
  ],
  exports: [
    IMCPage
  ],
  declarations: [IMCPage]
})
export class IMCPageModule {}
