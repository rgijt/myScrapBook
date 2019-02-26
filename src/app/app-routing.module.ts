import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './pages/public/login/login.module#LoginPageModule' },
  { path: 'registrate', loadChildren: './pages/public/registrate/registrate.module#RegistratePageModule' },
  { path: 'forgotpassword', loadChildren: './pages/public/forgotpassword/forgotpassword.module#ForgotpasswordPageModule' },
  {
    path: 'user',
    canActivate: [AuthGuardService],
    loadChildren: './pages/user/user-routing.module#UserRoutingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
