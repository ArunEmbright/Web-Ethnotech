import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {SubscribeComponent} from './subscribe/subscribe.component'
import { EmiComponent } from './emi/emi.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
},
{
  path: 'subscribe',
  component: SubscribeComponent
},
{
  path: 'emi',
  component: EmiComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
