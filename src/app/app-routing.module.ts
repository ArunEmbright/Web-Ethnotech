import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './module/privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './module/terms-condition/terms-condition.component'
import { SuccessComponent } from './module/success/success.component';
const routes: Routes = [
 
   {
    path: 'auth',
     loadChildren: () => import('./module/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'admin',
     loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth/register/terms_condition',
    component: TermsConditionComponent
  
  },
  {
    path: 'auth/register/privacy_policy',
    component: PrivacyPolicyComponent
  
  },
  {
    path: 'Success',
    component: SuccessComponent
  
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'top', relativeLinkResolution: 'corrected', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
