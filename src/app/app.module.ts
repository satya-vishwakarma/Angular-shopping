import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';


import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NavComponent } from './component/nav/nav.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import {ProductService} from './service/product.service';

const appRoutes : Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
