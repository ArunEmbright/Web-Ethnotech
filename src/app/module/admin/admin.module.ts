import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { UserTableComponent } from './user-table/user-table.component';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    UserTableComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    OrderModule,
    ReactiveFormsModule, FormsModule
  ]
})
export class AdminModule { }
