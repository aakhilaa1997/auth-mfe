import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone
  imports: [RouterModule], // Import RouterModule for <router-outlet>
  templateUrl: './app.component.html',
  styleUrls: [] // Remove the reference to the missing CSS file
})
export class AppComponent {}