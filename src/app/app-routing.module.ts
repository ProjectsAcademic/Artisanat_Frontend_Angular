import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutUsComponent } from './pages/informations/about-us/about-us.component';
import { ContactUsComponent } from './pages/informations/contact-us/contact-us.component';
import { BlogComponent } from './pages/informations/blog/blog.component';
import { CareInstructionComponent } from './pages/informations/care-instruction/care-instruction.component';
import { TermsConditionsComponent } from './pages/informations/terms-conditions/terms-conditions.component';
import { ReturnsExchangesComponent } from './pages/informations/returns-exchanges/returns-exchanges.component';
import { PrivacyPolicyComponent } from './pages/informations/privacy-policy/privacy-policy.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:"about-us",
    component:AboutUsComponent
  },
  {
    path:"contact-us",
    component:ContactUsComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"care-instruction",
    component:CareInstructionComponent
  },
  {
    path:"terms-conditions",
    component:TermsConditionsComponent
  },
  {
    path:"returns-exchanges",
    component:ReturnsExchangesComponent
  },
  {
    path:"privacy-policy",
    component:PrivacyPolicyComponent
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
