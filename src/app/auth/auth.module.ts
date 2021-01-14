import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import {AuthRoutingModule} from './auth-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import {UserPartsModule} from '../shared/user-parts/user-parts.module';
import {SharedModule} from '../shared/shared.module';
import { LandingpageComponent } from './components/landingpage/landingpage.component';



@NgModule({
  declarations: [SigninComponent, SignupComponent, LandingpageComponent],
  imports: [
    SharedModule,
    AuthRoutingModule,
    UserPartsModule
  ]
})
export class AuthModule { }
