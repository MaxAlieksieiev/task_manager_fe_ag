import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from "@angular/router";
import { RegistrationPageComponent } from './registration-page/registration-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegistrationPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
