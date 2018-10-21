import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListAlertePage } from './list-alerte';

@NgModule({
  declarations: [
    ListAlertePage,
  ],
  imports: [
    IonicPageModule.forChild(ListAlertePage),
  ],
})
export class ListAlertePageModule {}
