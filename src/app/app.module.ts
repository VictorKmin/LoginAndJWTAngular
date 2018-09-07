import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule} from '@angular/router';
import { UsersPageComponent } from './users-page/users-page.component';
import { UserComponent } from './user/user.component';
// import {AuthService} from './authService';
import {HttpClientModule} from '@angular/common/http';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'users', component: UsersPageComponent},
  // {path: 'facebook', component: AuthService},
  // {path: 'google', component: UsersPageComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UsersPageComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
