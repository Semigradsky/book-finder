import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { SearchFormComponent } from './search-form/search-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuard } from './_guards/auth.service';
import { Auth } from './_services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [
    AUTH_PROVIDERS,
    Auth,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
