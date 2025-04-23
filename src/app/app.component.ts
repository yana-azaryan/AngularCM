import { Component } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileComponentAdvanced } from './user-profile-advanced/user-profile-advanced.component';

@Component({
  selector: 'app-root',
  imports: [UserProfileComponent, UserProfileComponentAdvanced],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: string = "My Username";

  getUserStatus(status: string): void {
    console.log("User status changed to: " + status);
  }
}
