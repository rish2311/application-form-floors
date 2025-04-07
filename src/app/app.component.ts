import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFormFloorsComponent } from './app-form-floors/app-form-floors.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AppFormFloorsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'application-form-floors';
}
