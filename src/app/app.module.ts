import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiService } from './api.service';
import { CargoShipmentComponent } from './cargo-shipment/cargo-shipment.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { SuccessComponent } from './success/success.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomePageComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    CargoShipmentComponent,
    SuccessComponent,
    AppLayoutComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule ,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
