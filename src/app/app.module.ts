import {BrowserModule} from '@angular/platform-browser';
import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {UsersPageComponent} from './users-page/users-page.component';
import {UserComponent} from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {CreateUserComponent} from './create-user/create-user.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('1087255323964-tl8o2m0d9gqs4p4mv4rs7esvdu0pgin6.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('289942325137261')
  }
]);
const routes = [
  {path: '', component: HomePageComponent},
  {path: 'users', component: UsersPageComponent},
  {path: 'register', component: CreateUserComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'reset', component: ResetPasswordComponent},
  {path: 'logout', component: LogoutComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UsersPageComponent,
    UserComponent,
    CreateUserComponent,
    LoginPageComponent,
    ResetPasswordComponent,
    LogoutComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SocialLoginModule.initialize(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
