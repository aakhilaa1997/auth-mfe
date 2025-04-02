import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'one-shop-AI';
  constructor(private router: Router){
  }

navigateToHome() {
  this.router.navigate(['/homescreen']); // Navigates to the home route
}
}
