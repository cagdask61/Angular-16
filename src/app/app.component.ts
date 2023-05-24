import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import NavigationComponent from './components/environments/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    NavigationComponent
  ]
})
export default class AppComponent { }