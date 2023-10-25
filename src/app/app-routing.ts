import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from "./home/home.component";
const routes: Routes = [{path:'home',component:HomeComponent},
{path:'aboutus', component:AboutUsComponent},
{path: 'contactus', component:ContactUsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routeComponents=[HomeComponent,AboutUsComponent,ContactUsComponent];