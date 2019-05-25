import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { SalesComponent } from './components/sales/sales.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { NotFoundcomponentComponent } from './components/not-foundcomponent/not-foundcomponent.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { PostComponentComponent } from './components/post-component/post-component.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SalesComponent,
    ProductsComponent,
    HomeComponentComponent,
    NotFoundcomponentComponent,
    NavComponentComponent,
    FooterComponentComponent,
    PostComponentComponent, 
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
