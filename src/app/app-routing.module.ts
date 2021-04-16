import { NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {RegistrationComponent} from './registration/registration.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UserComponent } from './user/user.component';
// import {UserComponent} from "./user/user.component";
// import {RegistrationComponent} from './app.component/registration/Registration.Component'

const routes: Routes = [
  {path:"",component:LoginComponent},
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children:[{
      path:'update-admin/:id',
      component:UpdateAdminComponent
    }]
  },
  {
    path: 'user',
    component: UserComponent
    // canActivate:[AuthGuard]
  },
  {
    path:'profile',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
