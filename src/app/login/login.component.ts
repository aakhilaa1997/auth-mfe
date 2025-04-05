import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'

})
export class LoginComponent {
  constructor(private router: Router){
  }

  onSignIn() {
    //window.location.href redirects user to specified URL like dashboard-mfe
    // window.location.href = 'http://localhost:4300?username=${username}'; // Example: Redirect to dashboard-mfe
    window.location.href = 'http://localhost:4300';
}
}
