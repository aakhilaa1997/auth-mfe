import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: 'login', component: LoginComponent,
    },
    {
        path: 'forgot-password', component: ForgotPasswordComponent,
    },
    {
        path:'register', component: RegisterComponent,
    },
    {
        // Redirect to login if no path is provided
        // This is useful for when the user tries to access the app without a path
        // or when the user is not logged in and tries to access a protected route
        // You can also use a guard to protect the route
        // and redirect to login if the user is not logged in
        // this is default redirect
        path:'', redirectTo: 'login', pathMatch: 'full'
    }
];
