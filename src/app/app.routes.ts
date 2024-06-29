import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AnimationComponent } from './animation/animation.component';

export const routes: Routes = [
    
    { path: 'header', component: HeaderComponent},
    { path: 'home', component: HomeComponent},
    { path: 'ani', component: AnimationComponent},



];
