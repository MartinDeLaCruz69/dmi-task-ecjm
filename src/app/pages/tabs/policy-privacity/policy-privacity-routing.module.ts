import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyPrivacityPage } from './policy-privacity.page';

const routes: Routes = [
  {
    path: '',
    component: PolicyPrivacityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyPrivacityPageRoutingModule {}
