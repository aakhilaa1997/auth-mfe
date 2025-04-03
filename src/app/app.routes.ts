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
    }
];
