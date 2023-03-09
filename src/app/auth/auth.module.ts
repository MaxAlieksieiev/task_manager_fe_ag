import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LoginPageModule } from "./login-page/login-page.module";
import { RegistrationPageModule } from "./registration-page/registration-page.module";


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    LoginPageModule,
    RegistrationPageModule,
    RouterModule
  ]
})
export class AuthModule { }
