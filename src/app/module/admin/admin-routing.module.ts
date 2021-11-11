import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  {
    path: 'user-detail',
    component: UserTableComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'corrected', useHash: true })],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
