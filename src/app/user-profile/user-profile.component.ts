import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {
  // Property bound to the input field and used in interpolation
  username: string = 'Karen';

  // Method called when the button is clicked
  updateName() {
    // Updates the username to a predefined value
    this.username = 'UpdatedUser';
  }
}
