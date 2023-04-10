import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicyPrivacityPageRoutingModule } from './policy-privacity-routing.module';

import { PolicyPrivacityPage } from './policy-privacity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicyPrivacityPageRoutingModule
  ],
  declarations: [PolicyPrivacityPage]
})
export class PolicyPrivacityPageModule {}
