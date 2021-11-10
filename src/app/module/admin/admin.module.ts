import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserTableComponent } from './user-table/user-table.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    UserTableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    OrderModule
  ]
})
export class AdminModule { }
