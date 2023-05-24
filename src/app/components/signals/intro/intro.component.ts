import { Component, inject } from '@angular/core';

import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  imports: [
  ]
})
export default class IntroComponent {


  readonly stateService: StateService = inject(StateService);

}