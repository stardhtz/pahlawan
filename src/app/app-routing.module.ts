import { HomeComponent } from './home/home.component';
import { SignInComponent } from './welcome/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './welcome/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: WelcomeComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  { path: 'login', component: WelcomeComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
