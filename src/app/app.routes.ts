import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { ProfileComponent } from './components/profile.component/profile.component';
import { pattern } from '@angular/forms/signals';
import { Register } from './components/register/register';
import { Create } from './components/match/create/create';
import { authGuard } from './guards/auth-guard';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'register', component: Register},
    {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
    {path: 'create-match', component: Create, canActivate: [authGuard]},
    {path: 'contact', component: Contact}
];
