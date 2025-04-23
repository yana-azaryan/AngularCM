import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Required for Angular structural directives like *ngIf, *ngFor, *ngSwitch

@Component({
  selector: 'app-user-profile-advanced',
  imports: [FormsModule, CommonModule], // ✅ Importing modules needed for ngModel and Angular directives
  templateUrl: './user-profile-advanced.component.html',
  styleUrls: ['./user-profile-advanced.component.css'],
})
export class UserProfileComponentAdvanced {
  showDetails: boolean = true; // Used with *ngIf
  favoriteColors: string[] = ['Red', 'Blue', 'Green']; // Used with *ngFor
  status: string = 'active'; // Used with *ngSwitch
  salary: number = 1250.75; // Used with currency pipe
  today: Date = new Date(); // Used with date pipe

  @Input() username: string = 'DefaultUser'; // Input property to receive username from parent component
  @Output() userStatus = new EventEmitter<string>();

  updateName() {
    this.username = 'UpdatedUser'; // Called on button click
  }

  toggleDetails() {
    this.showDetails = !this.showDetails; // Toggles show/hide details section
  }

  switchStatus() {
    // Cycle through different statuses for *ngSwitch demo
    this.status =
      this.status === 'active'
        ? 'inactive'
        : this.status === 'inactive'
        ? 'pending'
        : 'active';
    this.userStatus.emit(this.status); // Emit the current status
  }
}
