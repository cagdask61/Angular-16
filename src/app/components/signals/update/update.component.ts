import { Component, inject } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-update',
  standalone: true,
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  imports: [
    MatButtonModule, MatInputModule
  ]
})
export default class UpdateComponent {

  private readonly stateService: StateService = inject(StateService);

  updateValue(value: string) {
    this.stateService.updateName(value);
  }
}