import { Component, inject } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-set',
  standalone: true,
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss'],
  imports: [
    MatButtonModule, MatInputModule
  ]
})
export default class SetComponent {


  readonly stateService: StateService = inject(StateService);

  setValue(value: string) {
    this.stateService.setName(value);
  }

}