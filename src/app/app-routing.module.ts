import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { CargoShipmentComponent } from './cargo-shipment/cargo-shipment.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
  path: '',
  component: AppLayoutComponent, // Shared layout for the following routes
  children: [
    { path: 'welcome', component: WelcomePageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'shipment', component: CargoShipmentComponent },
    { path: 'success', component: SuccessComponent }

  ],
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
