import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { ProfileComponent } from './components/profile.component/profile.component';
import { pattern } from '@angular/forms/signals';
import { Register } from './components/register/register';
import { Create } from './components/match/create/create';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'profile', component: ProfileComponent},
    {path: 'register', component: Register},
    {path: 'create-match', component: Create}
];
