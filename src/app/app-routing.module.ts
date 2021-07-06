import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileGuardService } from './profile-guard.service';
import { RegisterGuardService } from './register-guard.service';


const routes: Routes = [
  {path: 'register', canActivate: [RegisterGuardService], component: RegisterFormComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'profile', canActivate: [ProfileGuardService], component: ProfileComponent},
  {path: '', redirectTo: 'login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ProfileGuardService,
    RegisterGuardService
  ]
})
export class AppRoutingModule { }
